export const EVENT_BUS_PORT = Symbol('EVENT_BUS_PORT');

export interface IEventBus {
  emitEvent<T>(eventName: string, payload: T): Promise<void>;
}
