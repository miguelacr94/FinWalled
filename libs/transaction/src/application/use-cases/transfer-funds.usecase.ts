import { Injectable, Logger, Inject } from "@nestjs/common";
import { TRANSACTION_REPOSITORY } from "../../domain/repositories/transaction.repository.interface.js";
import type { ITransactionRepository } from "../../domain/repositories/transaction.repository.interface.js";
import {
  TransferFundsDto,
  TransferResponse,
} from "../dto/transfer-funds.dto.js";
import { Transaction } from "../../domain/entities/transaction.entity.js";
import { randomUUID } from "crypto";

@Injectable()
export class TransferFundsUseCase {
  private readonly logger = new Logger(TransferFundsUseCase.name);

  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(dto: TransferFundsDto): Promise<TransferResponse> {
    this.logger.log(`Iniciando transferencia desde ${dto.fromAccountId} hacia ${dto.toAccountId} por monto $${dto.amount}...`);

    // 1. Crear la entidad de dominio (Valida reglas puras como monto > 0 y cuentas distintas)
    const transactionId = randomUUID();
    const transaction = Transaction.create(
      transactionId,
      dto.fromAccountId,
      dto.toAccountId,
      dto.amount,
    );

    try {
      // 2. Ejecutar lógica de base de datos a través del repositorio (UoW, Outbox pattern y Optimistic Locking abstraídos)
      await this.transactionRepository.processTransfer(transaction);
      
      transaction.markAsCompleted();
      this.logger.log(`[EXITO] Transferencia ${transactionId} procesada y guardada con patrón Outbox.`);
    } catch (error: any) {
      this.logger.error(`[FALLO] No se pudo procesar la transferencia ${transactionId}: ${error.message}`);
      throw error;
    }

    return {
      transactionId: transaction.getId(),
      fromAccountId: transaction.getFromAccountId(),
      toAccountId: transaction.getToAccountId(),
      amount: transaction.getAmount(),
      status: transaction.getStatus(),
    };
  }
}
