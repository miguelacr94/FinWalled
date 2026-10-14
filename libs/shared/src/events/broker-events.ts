export const BrokerEvents = {
  USER_CREATED: 'user.created',
  DEPOSIT_REQUESTED: 'deposit.requested',
  DEPOSIT_COMPLETED: 'deposit.completed',
  // En el futuro podemos agregar más eventos centralizados aquí:
  // TRANSFER_INITIATED: 'transfer.initiated',
  // ACCOUNT_UPDATED: 'account.updated',
} as const;

export type BrokerEvent = typeof BrokerEvents[keyof typeof BrokerEvents];
