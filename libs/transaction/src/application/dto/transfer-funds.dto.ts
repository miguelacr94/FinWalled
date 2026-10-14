import { ApiProperty } from '@nestjs/swagger';

export class TransferFundsDto {
  @ApiProperty({ example: 'acc-uuid-123', description: 'Sender account ID' })
  fromAccountId!: string;

  @ApiProperty({ example: 'acc-uuid-456', description: 'Receiver account ID' })
  toAccountId!: string;

  @ApiProperty({ example: 1500.50, description: 'Amount to transfer' })
  amount!: number;
}

export interface TransferResponse {
  transactionId: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  status: string;
}

export interface TransferIntentResponse {
  intentId: string;
  status: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  transactionId: string | null;
  failureReason: string | null;
  expiresAt: Date;
}

export function toTransferIntentResponse(intent: {
  id: string;
  status: string;
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  transactionId: string | null;
  failureReason: string | null;
  expiresAt: Date;
}): TransferIntentResponse {
  return {
    intentId: intent.id,
    status: intent.status,
    fromAccountId: intent.fromAccountId,
    toAccountId: intent.toAccountId,
    amount: intent.amount,
    transactionId: intent.transactionId,
    failureReason: intent.failureReason,
    expiresAt: intent.expiresAt,
  };
}
