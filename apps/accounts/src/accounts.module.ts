import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller.js';
import { 
  CreateAccountUseCase, 
  PrismaAccountRepository, 
  ACCOUNT_REPOSITORY 
} from '@app/account';

@Module({
  imports: [],
  controllers: [AccountsController],
  providers: [
    CreateAccountUseCase,
    {
      provide: ACCOUNT_REPOSITORY,
      useClass: PrismaAccountRepository,
    },
  ],
})
export class AccountsModule {}
