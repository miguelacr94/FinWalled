export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED';
export declare class Transaction {
    private readonly id;
    private readonly fromAccountId;
    private readonly toAccountId;
    private readonly amount;
    private status;
    private readonly createdAt;
    private updatedAt;
    private constructor();
    static create(id: string, fromAccountId: string, toAccountId: string, amount: number): Transaction;
    markAsCompleted(): void;
    markAsFailed(): void;
    getId(): string;
    getFromAccountId(): string;
    getToAccountId(): string;
    getAmount(): number;
    getStatus(): TransactionStatus;
}
