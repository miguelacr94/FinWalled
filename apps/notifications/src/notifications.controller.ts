import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { BrokerEvents } from '@app/shared';
import { SendDepositNotificationUseCase } from '@app/notification';

console.log('--- NOTIFICATIONS CONTROLLER LOADED ---');
console.log('BrokerEvents:', BrokerEvents);
console.log('EventPattern Pattern:', BrokerEvents?.DEPOSIT_COMPLETED);

@Controller()
export class NotificationsController {
  private readonly logger = new Logger(NotificationsController.name);

  constructor(
    private readonly sendDepositNotificationUseCase: SendDepositNotificationUseCase
  ) {}

  @EventPattern('deposit.completed')
  async handleDepositCompleted(@Payload() data: { depositId: string; accountId: string; amount: number }) {
    this.logger.log(`🔔 Recibido evento de depósito exitoso: ${data.depositId}`);
    
    await this.sendDepositNotificationUseCase.execute(data.depositId, data.accountId, data.amount);
  }

  @EventPattern('notify.transfer.completed')
  async handleTransferCompletedNotification(@Payload() data: any) {
    this.logger.log(`✉️ [NOTIFY] ¡Enviando EMAIL a los usuarios! Transferencia exitosa de $${data.amount || 'desconocido'}.`);
    this.logger.log(`Detalles del envío: ${JSON.stringify(data, null, 2)}`);
    // En el futuro: Aquí inyectaríamos un SendTransferNotificationUseCase para mandar emails/SMS
  }
}
