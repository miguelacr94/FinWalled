import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LoginUseCase } from './application/use-cases/login.usecase.js';
import { PrismaUserRepository, USER_REPOSITORY } from '@app/user';
import { JwtStrategy } from '@app/shared';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository, // En un microservicio real, esto sería un llamado gRPC o RabbitMQ a Users
    },
    LoginUseCase,
    JwtStrategy,
  ],
  exports: [LoginUseCase],
})
export class AuthLibModule {}
