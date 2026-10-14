import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller.js';
import {
  TransferFundsUseCase,
  GetTransferByUserUseCase,
  CreateTransferIntentUseCase,
  ConfirmTransferIntentUseCase,
  GetTransferIntentUseCase,
  RequestDepositUseCase,
  GetDepositUseCase,
  PrismaTransactionRepository,
  TRANSACTION_REPOSITORY,
  OutboxProcessor,
  EVENT_BUS_PORT,
  RabbitMQEventBusAdapter,
} from '@app/transaction';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'transactions_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [
    {
      provide: TransferFundsUseCase,
      useClass: TransferFundsUseCase,
    },
    {
      provide: GetTransferByUserUseCase,
      useClass: GetTransferByUserUseCase,
    },
    CreateTransferIntentUseCase,
    ConfirmTransferIntentUseCase,
    GetTransferIntentUseCase,
    RequestDepositUseCase,
    GetDepositUseCase,
    {
      provide: TRANSACTION_REPOSITORY,
      useClass: PrismaTransactionRepository,
    },
    {
      provide: EVENT_BUS_PORT,
      useClass: RabbitMQEventBusAdapter,
    },
    OutboxProcessor,
  ],
})
export class TransactionsModule {}
