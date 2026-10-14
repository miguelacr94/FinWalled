import { Account } from '../entities/account.entity.js';

export const ACCOUNT_REPOSITORY = 'ACCOUNT_REPOSITORY';

export interface IAccountRepository {
  save(account: Account): Promise<void>;
  findById(id: string): Promise<Account | null>;
  findByUserId(userId: string): Promise<Account[]>;
}
