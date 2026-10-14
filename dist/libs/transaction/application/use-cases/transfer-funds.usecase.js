var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Transaction } from '../../domain/entities/transaction.entity.js';
import { Account } from '@app/account';
import { randomUUID } from 'crypto';
let TransferFundsUseCase = class TransferFundsUseCase {
    prisma = new PrismaClient();
    async execute(dto) {
        const transactionId = randomUUID();
        const transaction = Transaction.create(transactionId, dto.fromAccountId, dto.toAccountId, dto.amount);
        await this.prisma.$transaction(async (tx) => {
            const fromAccountRecord = await tx.account.findUniqueOrThrow({ where: { id: dto.fromAccountId } });
            const toAccountRecord = await tx.account.findUniqueOrThrow({ where: { id: dto.toAccountId } });
            const fromAccount = Account.load(fromAccountRecord.id, fromAccountRecord.userId, fromAccountRecord.balance, fromAccountRecord.status, fromAccountRecord.type, fromAccountRecord.createdAt, fromAccountRecord.version);
            const toAccount = Account.load(toAccountRecord.id, toAccountRecord.userId, toAccountRecord.balance, toAccountRecord.status, toAccountRecord.type, toAccountRecord.createdAt, toAccountRecord.version);
            fromAccount.withdraw(dto.amount);
            toAccount.deposit(dto.amount);
            const updatedFrom = await tx.account.updateMany({
                where: {
                    id: fromAccount.getId(),
                    version: fromAccountRecord.version,
                },
                data: {
                    balance: fromAccount.getBalance(),
                    version: { increment: 1 },
                },
            });
            if (updatedFrom.count === 0) {
                throw new Error('Concurrency Error: Account balance was modified by another process. Please retry.');
            }
            await tx.account.update({
                where: { id: toAccount.getId() },
                data: {
                    balance: toAccount.getBalance(),
                    version: { increment: 1 },
                },
            });
            await tx.outboxEvent.create({
                data: {
                    aggregateId: transaction.getId(),
                    type: 'FUNDS_TRANSFERRED',
                    payload: {
                        fromAccountId: transaction.getFromAccountId(),
                        toAccountId: transaction.getToAccountId(),
                        amount: transaction.getAmount(),
                    },
                },
            });
            transaction.markAsCompleted();
        });
        return transaction;
    }
};
TransferFundsUseCase = __decorate([
    Injectable()
], TransferFundsUseCase);
export { TransferFundsUseCase };
//# sourceMappingURL=transfer-funds.usecase.js.map