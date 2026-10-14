import { NestFactory } from '@nestjs/core';
import { NotificationsModule } from './notifications.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://user:password@localhost:5672'],
        queue: 'notifications_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  await app.listen();
  console.log('Notifications Microservice is listening via RabbitMQ...');
}
await bootstrap();
