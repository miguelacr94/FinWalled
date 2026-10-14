import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller.js';
import { SendDepositNotificationUseCase } from '@app/notification';

@Module({
  controllers: [NotificationsController],
  providers: [SendDepositNotificationUseCase],
})
export class NotificationsModule {}
