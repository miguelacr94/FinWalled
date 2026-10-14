import { NestFactory } from '@nestjs/core';
import { AccountsModule } from './accounts.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AccountsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: 'accounts_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
  console.log('Accounts Microservice is listening via RabbitMQ...');
}
await bootstrap();
