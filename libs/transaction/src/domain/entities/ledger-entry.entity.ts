export type LedgerEntryType = 'TRANSFER' | 'DEPOSIT';
export type LedgerDirection = 'DEBIT' | 'CREDIT';

export interface LedgerEntryRecord {
  id: string;
  transactionId: string;
  type: LedgerEntryType;
  direction: LedgerDirection;
  accountId: string;
  userId: string;
  counterpartyAccountId: string | null;
  amount: number;
  balanceAfter: number;
  createdAt: Date;
}

export interface HistoryPage {
  items: LedgerEntryRecord[];
  /** Cursor opaco para pedir la siguiente página; null si no hay más. */
  nextCursor: string | null;
}

export interface HistoryQuery {
  limit: number;
  cursor?: string;
}
