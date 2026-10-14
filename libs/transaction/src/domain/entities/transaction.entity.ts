import { isValidMoneyAmount } from '../money.js';

export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

export class Transaction {
  private constructor(
    private readonly id: string,
    private readonly fromAccountId: string,
    private readonly toAccountId: string,
    private readonly amount: number,
    private status: TransactionStatus,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(id: string, fromAccountId: string, toAccountId: string, amount: number): Transaction {
    if (!isValidMoneyAmount(amount)) {
      throw new Error('Transaction amount must be strictly positive with at most 2 decimals');
    }
    if (fromAccountId === toAccountId) {
      throw new Error('Cannot transfer to the same account');
    }
    return new Transaction(id, fromAccountId, toAccountId, amount, 'PENDING', new Date(), new Date());
  }

  markAsCompleted(): void {
    if (this.status !== 'PENDING') {
      throw new Error('Only pending transactions can be completed');
    }
    this.status = 'COMPLETED';
    this.updatedAt = new Date();
  }

  markAsFailed(): void {
    if (this.status !== 'PENDING') {
      throw new Error('Only pending transactions can be failed');
    }
    this.status = 'FAILED';
    this.updatedAt = new Date();
  }

  // Getters
  getId(): string { return this.id; }
  getFromAccountId(): string { return this.fromAccountId; }
  getToAccountId(): string { return this.toAccountId; }
  getAmount(): number { return this.amount; }
  getStatus(): TransactionStatus { return this.status; }
}
