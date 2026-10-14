import { TransferFundsDto } from '../dto/transfer-funds.dto.js';
import { Transaction } from '../../domain/entities/transaction.entity.js';
export declare class TransferFundsUseCase {
    private prisma;
    execute(dto: TransferFundsDto): Promise<Transaction>;
}
