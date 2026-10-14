export class Transaction {
    id;
    fromAccountId;
    toAccountId;
    amount;
    status;
    createdAt;
    updatedAt;
    constructor(id, fromAccountId, toAccountId, amount, status, createdAt, updatedAt) {
        this.id = id;
        this.fromAccountId = fromAccountId;
        this.toAccountId = toAccountId;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static create(id, fromAccountId, toAccountId, amount) {
        if (amount <= 0) {
            throw new Error('Transaction amount must be strictly positive');
        }
        if (fromAccountId === toAccountId) {
            throw new Error('Cannot transfer to the same account');
        }
        return new Transaction(id, fromAccountId, toAccountId, amount, 'PENDING', new Date(), new Date());
    }
    markAsCompleted() {
        if (this.status !== 'PENDING') {
            throw new Error('Only pending transactions can be completed');
        }
        this.status = 'COMPLETED';
        this.updatedAt = new Date();
    }
    markAsFailed() {
        if (this.status !== 'PENDING') {
            throw new Error('Only pending transactions can be failed');
        }
        this.status = 'FAILED';
        this.updatedAt = new Date();
    }
    getId() { return this.id; }
    getFromAccountId() { return this.fromAccountId; }
    getToAccountId() { return this.toAccountId; }
    getAmount() { return this.amount; }
    getStatus() { return this.status; }
}
//# sourceMappingURL=transaction.entity.js.map