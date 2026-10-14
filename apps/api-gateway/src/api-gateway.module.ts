import { Module } from '@nestjs/common';
import { UsersGatewayModule } from './modules/users/users.module.js';
import { TransactionsModule } from './modules/transactions/transactions.module.js';
import { AuthGatewayModule } from './modules/auth/auth.module.js';
import { ObservabilityModule, AuditInterceptor, IdempotencyModule } from '@app/shared';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    // Límite de 10 peticiones cada 60 segundos por IP
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/finwallet_logs'),
    ObservabilityModule,
    IdempotencyModule,
    UsersGatewayModule,
    TransactionsModule,
    AuthGatewayModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AuditInterceptor,
    },
  ],
})
export class ApiGatewayModule {}
