import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SendDepositNotificationUseCase {
  private readonly logger = new Logger(SendDepositNotificationUseCase.name);

  async execute(depositId: string, accountId: string, amount: number): Promise<void> {
    this.logger.log(`Preparando notificaciones para el depósito ${depositId}...`);
    
    // Aquí es donde en la vida real te integrarías con AWS SNS, SendGrid, Twilio, etc.
    
    // Simulamos el envío de Email
    this.logger.log(`📧 [EMAIL ENVIADO] "Hola, tu depósito de $${amount} a la cuenta ${accountId} fue exitoso."`);
    
    // Simulamos el envío de SMS/Push Notification
    this.logger.log(`📱 [PUSH NOTIFICATION] "¡Dinero recibido! Acabas de recargar $${amount}."`);
    
    this.logger.log(`Notificaciones completadas con éxito para el depósito ${depositId}`);
  }
}
