import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client-accounts';
import { Account, AccountStatus, AccountType } from '../../domain/entities/account.entity.js';
import { IAccountRepository } from '../../domain/repositories/account.repository.interface.js';

@Injectable()
export class PrismaAccountRepository implements IAccountRepository {
  private prisma = new PrismaClient(); // En producción usaríamos un PrismaService inyectable

  async save(account: Account): Promise<void> {
    await this.prisma.account.upsert({
      where: { id: account.getId() },
      update: {
        balance: account.getBalance(),
        status: account.getStatus(),
        version: account.getVersion(),
      },
      create: {
        id: account.getId(),
        accountNumber: account.getAccountNumber(),
        bank: account.getBank(),
        userId: account.getUserId(),
        balance: account.getBalance(),
        status: account.getStatus(),
        type: account.getType(),
        version: account.getVersion(),
      },
    });
  }

  async findById(id: string): Promise<Account | null> {
    const data = await this.prisma.account.findUnique({ where: { id } });
    if (!data) return null;
    return this.mapToDomain(data);
  }

  async findByUserId(userId: string): Promise<Account[]> {
    const records = await this.prisma.account.findMany({ where: { userId } });
    return records.map(this.mapToDomain);
  }

  private mapToDomain(data: any): Account {
    return Account.load(
      data.id,
      data.accountNumber,
      data.bank,
      data.userId,
      Number(data.balance),
      data.status as AccountStatus,
      data.type as AccountType,
      data.createdAt,
      data.version,
    );
  }
}
