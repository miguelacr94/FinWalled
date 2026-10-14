export class Account {
    id;
    userId;
    balance;
    status;
    type;
    createdAt;
    version;
    constructor(id, userId, balance, status, type, createdAt, version) {
        this.id = id;
        this.userId = userId;
        this.balance = balance;
        this.status = status;
        this.type = type;
        this.createdAt = createdAt;
        this.version = version;
    }
    static create(id, userId, type = 'SAVINGS') {
        return new Account(id, userId, 0, 'ACTIVE', type, new Date(), 0);
    }
    static load(id, userId, balance, status, type, createdAt, version) {
        return new Account(id, userId, balance, status, type, createdAt, version);
    }
    withdraw(amount) {
        if (this.status !== 'ACTIVE') {
            throw new Error('Cannot withdraw from an inactive account');
        }
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than zero');
        }
        if (this.balance < amount) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
    }
    deposit(amount) {
        if (this.status !== 'ACTIVE') {
            throw new Error('Cannot deposit to an inactive account');
        }
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than zero');
        }
        this.balance += amount;
    }
    getId() { return this.id; }
    getUserId() { return this.userId; }
    getBalance() { return this.balance; }
    getStatus() { return this.status; }
    getType() { return this.type; }
    getVersion() { return this.version; }
}
//# sourceMappingURL=account.entity.js.map