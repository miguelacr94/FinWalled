import { Injectable, Logger, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TRANSACTION_REPOSITORY } from '../../domain/repositories/transaction.repository.interface.js';
import type { ITransactionRepository } from '../../domain/repositories/transaction.repository.interface.js';
import { EVENT_BUS_PORT } from '../../domain/interfaces/event-bus.interface.js';
import type { IEventBus } from '../../domain/interfaces/event-bus.interface.js';

@Injectable()
export class OutboxProcessor {
  private readonly logger = new Logger(OutboxProcessor.name);
  private isProcessing = false;

  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly transactionRepository: ITransactionRepository,
    @Inject(EVENT_BUS_PORT)
    private readonly eventBus: IEventBus,
  ) {}

  /**
   * CronJob del Patrón Transactional Outbox:
   * 
   * ¿Por qué existe?:
   * Cuando se hace una transferencia, no podemos hablar directamente con RabbitMQ dentro
   * de la transacción de Postgres porque si la red falla, los datos se desincronizan.
   * Por eso, el caso de uso solo guarda el evento en la tabla "OutboxEvent" (estado PENDING).
   * Este cronjob es el "cartero" que se encarga de leer esos eventos y enviarlos a RabbitMQ.
   */
  @Cron(CronExpression.EVERY_10_SECONDS) // ⏱️ 1. NestJS ejecuta este método automáticamente cada 10 segundos
  async processOutboxEvents() {
    // 🛡️ 2. Control de Concurrencia local:
    // Si la ejecución anterior todavía está enviando mensajes (por ejemplo, porque la red está lenta),
    // evitamos que una nueva ejecución se dispare al mismo tiempo y se solapen.
    if (this.isProcessing) return;
    this.isProcessing = true; // Marcamos como "ocupado"

    try {
      // 📦 3. Llamamos al repositorio de base de datos para procesar el lote:
      // Dentro del repositorio ocurre una consulta SQL con "FOR UPDATE SKIP LOCKED":
      // - Selecciona hasta 50 eventos en estado 'PENDING'.
      // - Los bloquea en Postgres para que si tienes 3 servidores/instancias corriendo en producción,
      //   ningún otro servidor tome los mismos eventos (cero duplicados).
      const publishedCount = await this.transactionRepository.publishPendingOutboxEvents(
        // ✉️ 4. Función Callback (lo que queremos hacer con cada evento antes de confirmar):
        async (event) => {
          // 👉 Aquí se publica físicamente el mensaje hacia RabbitMQ a través del EventBus:
          await this.eventBus.emitEvent(event.type, event.payload);
          this.logger.log(`Evento ${event.id} (${event.type}) publicado a RabbitMQ exitosamente.`);
          // 💡 NOTA IMPORTANTE: Si esta línea falla (RabbitMQ caído), la promesa lanza un error.
          // El repositorio NO marcará el evento como PUBLISHED, dejándolo en PENDING para el próximo turno.
        },
      );

      // 📊 5. Si se publicaron eventos con éxito, lo registramos en el log
      if (publishedCount > 0) {
        this.logger.log(`Lote completado: ${publishedCount} eventos publicados del Outbox.`);
      }
    } catch (error: any) {
      // 🚨 6. Si ocurrió un error grave de conexión a la BD, lo registramos sin tumbar el servidor
      this.logger.error(`Error procesando lote de Outbox: ${error.message}`);
    } finally {
      // 🔓 7. Liberamos la bandera para que en los próximos 10 segundos el cronjob pueda volver a ejecutarse
      this.isProcessing = false;
    }
  }
}
