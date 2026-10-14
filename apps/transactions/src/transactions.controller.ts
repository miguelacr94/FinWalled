import { Controller, Logger, Inject } from '@nestjs/common';
import { EventPattern, Payload, ClientProxy } from '@nestjs/microservices';
import { BrokerEvents } from '@app/shared';
import { ProcessDepositUseCase } from '@app/transaction';

@Controller()
export class TransactionsController {
  private readonly logger = new Logger(TransactionsController.name);

  constructor(
    private readonly processDepositUseCase: ProcessDepositUseCase,
    @Inject('RABBITMQ_SERVICE') private readonly notificationsClient: ClientProxy
  ) {}

  @EventPattern(BrokerEvents.DEPOSIT_REQUESTED)
  async handleDepositRequested(@Payload() data: { depositId: string }) {
    this.logger.log(`📥 Recibido evento de RabbitMQ para depósito: ${data.depositId}`);
    
    // ProcessDepositUseCase carga los datos de forma segura desde la BD y maneja reintentos/circuit breaker
    await this.processDepositUseCase.execute(data.depositId);
  }

  @EventPattern('FUNDS_TRANSFERRED')
  async handleTransferCompleted(@Payload() data: any) {
    this.logger.log(`📚 [CQRS Historial] Recibido evento de transferencia exitosa en el Microservicio de Transacciones.`);
    this.logger.log(`Registrando en base de datos de solo lectura: ${JSON.stringify(data, null, 2)}`);
    
    // Disparamos un Evento de Integración hacia Notificaciones
    this.logger.log(`📤 Enviando evento 'notify.transfer.completed' al microservicio de Notificaciones...`);
    this.notificationsClient.emit('notify.transfer.completed', data);
  }
}
