export const DEFAULT_HISTORY_PAGE_SIZE = 20;
export const MAX_HISTORY_PAGE_SIZE = 100;

export interface GetTransferByUserDto {
  userId: string;
}

export interface HistoryItemResponse {
  id: string;
  transactionId: string;
  type: string;
  direction: string;
  accountId: string;
  counterpartyAccountId: string | null;
  amount: number;
  balanceAfter: number;
  createdAt: Date;
}

export interface HistoryResponse {
  items: HistoryItemResponse[];
  /** Pásalo como `cursor` para pedir la siguiente página; null si ya no hay más. */
  nextCursor: string | null;
}
