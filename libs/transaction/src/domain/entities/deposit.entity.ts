/**
 * Recarga con el banco externo.
 * Ciclo de vida (persistido en BD): PENDING -> PROCESSING -> COMPLETED | FAILED.
 * Un fallo transitorio devuelve la recarga a PENDING con un nextAttemptAt (backoff exponencial).
 */
export type DepositStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export const ACTIVE_DEPOSIT_STATUSES: DepositStatus[] = ['PENDING', 'PROCESSING'];

export interface DepositRecord {
  id: string;
  userId: string;
  accountId: string;
  amount: number;
  cardToken: string;
  idempotencyKey: string | null;
  status: DepositStatus;
  attempts: number;
  nextAttemptAt: Date;
  lockedUntil: Date | null;
  bankReference: string | null;
  failureReason: string | null;
  createdAt: Date;
  completedAt: Date | null;
}
