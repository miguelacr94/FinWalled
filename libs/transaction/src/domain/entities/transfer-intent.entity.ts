export type TransferIntentStatus =
  | 'CREATED'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED'
  | 'EXPIRED';

/** Estados que bloquean la cuenta origen (solo una intención activa por cuenta). */
export const ACTIVE_INTENT_STATUSES: TransferIntentStatus[] = ['CREATED', 'PROCESSING'];

export interface TransferIntentRecord {
  id: string;
  userId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  status: TransferIntentStatus;
  failureReason: string | null;
  transactionId: string | null;
  expiresAt: Date;
  createdAt: Date;
}
