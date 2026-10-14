import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { 
  CreateUserUseCase, 
  PrismaUserRepository, 
  USER_REPOSITORY 
} from '@app/user';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'accounts_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UsersGatewayModule {}
