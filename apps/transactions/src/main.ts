import { NestFactory } from '@nestjs/core';
import { TransactionsModule } from './transactions.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TransactionsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: 'transactions_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
  console.log('Transactions Microservice is listening via RabbitMQ...');
}
await bootstrap();
