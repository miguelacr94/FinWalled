export class Deposit {
    id;
    accountId;
    amount;
    idempotencyKey;
    status;
    createdAt;
    updatedAt;
    constructor(id, accountId, amount, idempotencyKey, status, createdAt, updatedAt) {
        this.id = id;
        this.accountId = accountId;
        this.amount = amount;
        this.idempotencyKey = idempotencyKey;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static create(id, accountId, amount, idempotencyKey) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be strictly positive');
        }
        if (!idempotencyKey) {
            throw new Error('Idempotency key is required to prevent double charging');
        }
        return new Deposit(id, accountId, amount, idempotencyKey, 'PENDING', new Date(), new Date());
    }
    approve() {
        if (this.status !== 'PENDING') {
            throw new Error('Can only approve pending deposits');
        }
        this.status = 'APPROVED';
        this.updatedAt = new Date();
    }
    reject() {
        if (this.status !== 'PENDING') {
            throw new Error('Can only reject pending deposits');
        }
        this.status = 'REJECTED';
        this.updatedAt = new Date();
    }
    getId() { return this.id; }
    getAccountId() { return this.accountId; }
    getAmount() { return this.amount; }
    getIdempotencyKey() { return this.idempotencyKey; }
    getStatus() { return this.status; }
}
//# sourceMappingURL=deposit.entity.js.map