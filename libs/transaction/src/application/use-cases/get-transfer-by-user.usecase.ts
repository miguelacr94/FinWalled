import { Injectable, Logger, Inject, BadRequestException } from "@nestjs/common";
import { TRANSACTION_REPOSITORY } from "../../domain/repositories/transaction.repository.interface.js";
import type { ITransactionRepository } from "../../domain/repositories/transaction.repository.interface.js";
import {
  decodeHistoryCursor,
  InvalidHistoryCursorError,
} from "../../domain/history-cursor.js";
import {
  DEFAULT_HISTORY_PAGE_SIZE,
  HistoryResponse,
  MAX_HISTORY_PAGE_SIZE,
} from "../dto/transfer.dto.js";

/**
 * Historial de movimientos del usuario (pantalla más visitada).
 * Lee del libro mayor con paginación por cursor sobre un índice dedicado:
 * costo constante sin importar cuántos movimientos tenga el usuario.
 */
@Injectable()
export class GetTransferByUserUseCase {
  private readonly logger = new Logger(GetTransferByUserUseCase.name);
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(
    userId: string,
    options: { limit?: number; cursor?: string } = {},
  ): Promise<HistoryResponse> {
    if (!userId) {
      throw new BadRequestException("El userId es requerido para obtener el historial.");
    }

    const requestedLimit = options.limit === undefined ? DEFAULT_HISTORY_PAGE_SIZE : Number(options.limit);
    if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
      throw new BadRequestException("limit must be a positive integer");
    }
    const limit = Math.min(requestedLimit, MAX_HISTORY_PAGE_SIZE);

    if (options.cursor) {
      try {
        decodeHistoryCursor(options.cursor);
      } catch (error) {
        if (error instanceof InvalidHistoryCursorError) {
          throw new BadRequestException("Invalid cursor");
        }
        throw error;
      }
    }

    const page = await this.transactionRepository.getHistoryByUser(userId, {
      limit,
      cursor: options.cursor,
    });

    return {
      items: page.items.map((entry) => ({
        id: entry.id,
        transactionId: entry.transactionId,
        type: entry.type,
        direction: entry.direction,
        accountId: entry.accountId,
        counterpartyAccountId: entry.counterpartyAccountId,
        amount: entry.amount,
        balanceAfter: entry.balanceAfter,
        createdAt: entry.createdAt,
      })),
      nextCursor: page.nextCursor,
    };
  }
}
