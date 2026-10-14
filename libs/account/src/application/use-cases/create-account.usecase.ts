import { Injectable, Inject } from "@nestjs/common";
import { randomUUID, randomInt } from "crypto";
import { Account } from "../../domain/entities/account.entity.js";
import { ACCOUNT_REPOSITORY } from "../../domain/repositories/account.repository.interface.js";
import type { IAccountRepository } from "../../domain/repositories/account.repository.interface.js";

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepository: IAccountRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    const id = randomUUID();
    const accountNumber = randomInt(1000000000, 9999999999).toString();

    // 1. Usar la Entidad de Dominio (Factory method)
    const newAccount = Account.create(id, accountNumber, userId);

    // 2. Persistir a través del Puerto (Repositorio)
    await this.accountRepository.save(newAccount);

    console.log(
      `[Account Microservice] Created account ${newAccount.getAccountNumber()} for user ${newAccount.getUserId()}`,
    );
  }
}
