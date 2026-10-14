import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller.js';
import { ProcessDepositUseCase, BankApiService, RabbitMQEventBusAdapter, EVENT_BUS_PORT, PrismaTransactionRepository, TRANSACTION_REPOSITORY } from '@app/transaction';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://user:password@localhost:5672'],
          queue: 'notifications_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [
    ProcessDepositUseCase, 
    BankApiService,
    {
      provide: EVENT_BUS_PORT,
      useClass: RabbitMQEventBusAdapter,
    },
    {
      provide: TRANSACTION_REPOSITORY,
      useClass: PrismaTransactionRepository,
    }
  ],
})
export class TransactionsModule {}
