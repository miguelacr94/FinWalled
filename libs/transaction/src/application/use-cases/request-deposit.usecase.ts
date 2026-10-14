import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { BrokerEvents } from "@app/shared";
import { TRANSACTION_REPOSITORY } from "../../domain/repositories/transaction.repository.interface.js";
import type { ITransactionRepository } from "../../domain/repositories/transaction.repository.interface.js";
import { EVENT_BUS_PORT } from "../../domain/interfaces/event-bus.interface.js";
import type { IEventBus } from "../../domain/interfaces/event-bus.interface.js";
import { isValidMoneyAmount } from "../../domain/money.js";
import type { DepositRecord } from "../../domain/entities/deposit.entity.js";
import {
  DepositRequestedResponse,
  DepositStatusResponse,
  RequestDepositDto,
} from "../dto/deposit.dto.js";

const MAX_IDEMPOTENCY_KEY_LENGTH = 128;

const STATUS_MESSAGES: Record<string, string> = {
  PENDING: "Tu depósito está siendo procesado por el banco. Te notificaremos cuando se complete.",
  PROCESSING: "Tu depósito está siendo procesado por el banco. Te notificaremos cuando se complete.",
  COMPLETED: "Tu depósito ya fue acreditado.",
  FAILED: "Tu depósito no pudo completarse.",
};

/**
 * Registra la recarga y responde de inmediato (202). NO habla con el banco.
 *
 * Anti doble cobro, sin depender del front:
 *  - La BD impide dos recargas ACTIVAS idénticas (cuenta + monto + tarjeta): un doble clic o un
 *    refresh devuelve la MISMA recarga aunque el front mande llaves distintas.
 *  - Si el cliente envía `x-idempotency-key` (opcional), una repetición devuelve la recarga original
 *    incluso después de completarse; reutilizar la llave con otros datos es un 409.
 */
@Injectable()
export class RequestDepositUseCase {
  private readonly logger = new Logger(RequestDepositUseCase.name);

  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly repository: ITransactionRepository,
    @Inject(EVENT_BUS_PORT) private readonly eventBus: IEventBus,
  ) {}

  async execute(
    userId: string,
    dto: RequestDepositDto,
    idempotencyKey?: string,
  ): Promise<DepositRequestedResponse> {
    if (!dto?.accountId || typeof dto.accountId !== "string") {
      throw new BadRequestException("accountId is required");
    }
    if (!isValidMoneyAmount(dto.amount)) {
      throw new BadRequestException("amount must be a positive number with at most 2 decimals");
    }
    if (!dto.cardToken || typeof dto.cardToken !== "string") {
      throw new BadRequestException("cardToken is required");
    }
    if (idempotencyKey !== undefined && (!idempotencyKey || idempotencyKey.length > MAX_IDEMPOTENCY_KEY_LENGTH)) {
      throw new BadRequestException(`x-idempotency-key must have 1-${MAX_IDEMPOTENCY_KEY_LENGTH} characters`);
    }

    const owner = await this.repository.findAccountOwner(dto.accountId);
    if (!owner) throw new NotFoundException("Account not found");
    if (owner !== userId) throw new ForbiddenException("You do not own this account");

    const { deposit, created } = await this.repository.createDeposit({
      userId,
      accountId: dto.accountId,
      amount: dto.amount,
      cardToken: dto.cardToken,
      idempotencyKey,
    });

    if (!created) {
      if (idempotencyKey && !this.samePayload(deposit, dto)) {
        throw new ConflictException("The idempotency key was already used with a different request");
      }
      this.logger.log(`Recarga duplicada detectada; se devuelve la existente ${deposit.id} (${deposit.status}).`);
      return this.toResponse(deposit);
    }

    // Camino rápido: avisa al worker. Es best-effort; si falla, el sweeper la recoge de la BD.
    try {
      await this.eventBus.emitEvent(BrokerEvents.DEPOSIT_REQUESTED, { depositId: deposit.id });
    } catch (error: any) {
      this.logger.warn(`No se pudo avisar al worker de la recarga ${deposit.id}; lo hará el sweeper: ${error.message}`);
    }

    return this.toResponse(deposit);
  }

  private samePayload(deposit: DepositRecord, dto: RequestDepositDto): boolean {
    return (
      deposit.accountId === dto.accountId &&
      deposit.amount === dto.amount &&
      deposit.cardToken === dto.cardToken
    );
  }

  private toResponse(deposit: DepositRecord): DepositRequestedResponse {
    return {
      message: STATUS_MESSAGES[deposit.status] ?? STATUS_MESSAGES.PENDING,
      depositId: deposit.id,
      status: deposit.status,
    };
  }
}

/** Consulta del estado de una recarga (para polling del front). */
@Injectable()
export class GetDepositUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly repository: ITransactionRepository,
  ) {}

  async execute(userId: string, depositId: string): Promise<DepositStatusResponse> {
    const deposit = await this.repository.findDeposit(depositId);
    if (!deposit || deposit.userId !== userId) {
      throw new NotFoundException("Deposit not found");
    }
    return {
      depositId: deposit.id,
      accountId: deposit.accountId,
      amount: deposit.amount,
      status: deposit.status,
      attempts: deposit.attempts,
      failureReason: deposit.status === "FAILED" ? deposit.failureReason : null,
      createdAt: deposit.createdAt,
      completedAt: deposit.completedAt,
    };
  }
}
