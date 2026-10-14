export type AccountStatus = 'ACTIVE' | 'SUSPENDED' | 'CLOSED';
export type AccountType = 'SAVINGS' | 'CHECKING';
export declare class Account {
    private readonly id;
    private readonly userId;
    private balance;
    private status;
    private readonly type;
    private readonly createdAt;
    private readonly version;
    private constructor();
    static create(id: string, userId: string, type?: AccountType): Account;
    static load(id: string, userId: string, balance: number, status: AccountStatus, type: AccountType, createdAt: Date, version: number): Account;
    withdraw(amount: number): void;
    deposit(amount: number): void;
    getId(): string;
    getUserId(): string;
    getBalance(): number;
    getStatus(): AccountStatus;
    getType(): AccountType;
    getVersion(): number;
}
