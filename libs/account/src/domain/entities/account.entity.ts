export type AccountStatus = 'ACTIVE' | 'SUSPENDED' | 'CLOSED';
export type AccountType = 'SAVINGS' | 'CHECKING';

export class Account {
  private constructor(
    private readonly id: string,
    private readonly accountNumber: string,
    private readonly bank: string,
    private readonly userId: string,
    private balance: number,
    private status: AccountStatus,
    private readonly type: AccountType,
    private readonly createdAt: Date,
    private readonly version: number,
  ) {}

  static create(
    id: string,
    accountNumber: string,
    userId: string,
    bank: string = 'FinWallet',
    type: AccountType = 'SAVINGS',
  ): Account {
    // Aquí puedes meter lógicas internas. Por ejemplo, validar que accountNumber tenga 10 dígitos.
    if (accountNumber.length !== 10) {
      throw new Error('Account number must be exactly 10 digits');
    }
    return new Account(id, accountNumber, bank, userId, 0, 'ACTIVE', type, new Date(), 0);
  }

  // Hydrate an existing account from the database
  static load(
    id: string,
    accountNumber: string,
    bank: string,
    userId: string,
    balance: number,
    status: AccountStatus,
    type: AccountType,
    createdAt: Date,
    version: number,
  ): Account {
    return new Account(id, accountNumber, bank, userId, balance, status, type, createdAt, version);
  }

  // Business Rule: Withdraw money ensuring we don't go below 0 and status is ACTIVE
  withdraw(amount: number): void {
    if (this.status !== 'ACTIVE') {
      throw new Error('Cannot withdraw from an inactive account');
    }
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than zero');
    }
    if (this.balance < amount) {
      throw new Error('Insufficient funds'); // Rule A & B implementation
    }
    
    this.balance -= amount;
  }

  // Business Rule: Deposit money
  deposit(amount: number): void {
    if (this.status !== 'ACTIVE') {
      throw new Error('Cannot deposit to an inactive account');
    }
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than zero');
    }

    this.balance += amount;
  }

  // Getters
  getId(): string { return this.id; }
  getAccountNumber(): string { return this.accountNumber; }
  getBank(): string { return this.bank; }
  getUserId(): string { return this.userId; }
  getBalance(): number { return this.balance; }
  getStatus(): AccountStatus { return this.status; }
  getType(): AccountType { return this.type; }
  getVersion(): number { return this.version; }
}
