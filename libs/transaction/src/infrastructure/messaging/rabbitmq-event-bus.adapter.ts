import { Injectable, Inject } from '@nestjs/common';
import { IEventBus } from '../../domain/interfaces/event-bus.interface.js';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQEventBusAdapter implements IEventBus {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly rabbitClient: ClientProxy,
  ) {}

  async emitEvent<T>(eventName: string, payload: T): Promise<void> {
    this.rabbitClient.emit(eventName, payload);
  }
}
