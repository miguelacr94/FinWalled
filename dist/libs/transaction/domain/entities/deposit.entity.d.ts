export type DepositStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export declare class Deposit {
    private readonly id;
    private readonly accountId;
    private readonly amount;
    private readonly idempotencyKey;
    private status;
    private readonly createdAt;
    private updatedAt;
    private constructor();
    static create(id: string, accountId: string, amount: number, idempotencyKey: string): Deposit;
    approve(): void;
    reject(): void;
    getId(): string;
    getAccountId(): string;
    getAmount(): number;
    getIdempotencyKey(): string;
    getStatus(): DepositStatus;
}
