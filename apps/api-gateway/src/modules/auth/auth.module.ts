import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthLibModule } from '@app/auth';

@Module({
  imports: [AuthLibModule],
  controllers: [AuthController],
})
export class AuthGatewayModule {}
