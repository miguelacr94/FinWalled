import { ApiProperty } from '@nestjs/swagger';

export class RequestDepositDto {
  @ApiProperty({ example: 'acc-uuid-123', description: 'Account ID to deposit into' })
  accountId!: string;

  @ApiProperty({ example: 500.0, description: 'Amount to deposit (max 2 decimals)' })
  amount!: number;

  @ApiProperty({ example: 'tok_visa_123', description: 'Card token from frontend stripe/bank' })
  cardToken!: string;
}

export interface DepositRequestedResponse {
  message: string;
  depositId: string;
  status: string;
}

export interface DepositStatusResponse {
  depositId: string;
  accountId: string;
  amount: number;
  status: string;
  attempts: number;
  failureReason: string | null;
  createdAt: Date;
  completedAt: Date | null;
}
