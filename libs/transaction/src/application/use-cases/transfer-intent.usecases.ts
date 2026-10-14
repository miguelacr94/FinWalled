import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { randomUUID } from "crypto";
import { TRANSACTION_REPOSITORY } from "../../domain/repositories/transaction.repository.interface.js";
import type { ITransactionRepository } from "../../domain/repositories/transaction.repository.interface.js";
import { Transaction } from "../../domain/entities/transaction.entity.js";
import type { TransferIntentRecord } from "../../domain/entities/transfer-intent.entity.js";
import {
  TransferFundsDto,
  TransferIntentResponse,
  toTransferIntentResponse,
} from "../dto/transfer-funds.dto.js";

/** Tiempo que el usuario tiene para confirmar una intención antes de que expire y libere la cuenta. */
export const INTENT_TTL_MS = 2 * 60 * 1000;
/** Tiempo máximo que una intención puede estar PROCESSING antes de considerarse caída. */
export const INTENT_PROCESSING_TIMEOUT_MS = 30 * 1000;

/**
 * Paso 1: el SERVIDOR emite el intentId y bloquea la cuenta origen.
 * No depende de ninguna llave generada por el front.
 */
@Injectable()
export class CreateTransferIntentUseCase {
  private readonly logger = new Logger(CreateTransferIntentUseCase.name);

  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly repository: ITransactionRepository,
  ) {}

  async execute(userId: string, dto: TransferFundsDto): Promise<TransferIntentResponse> {
    // Reglas puras del dominio (monto > 0, cuentas distintas)
    try {
      Transaction.create(randomUUID(), dto.fromAccountId, dto.toAccountId, dto.amount);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }

    // Autorización: solo el dueño de la cuenta origen puede transferir desde ella
    const owner = await this.repository.findAccountOwner(dto.fromAccountId);
    if (!owner) throw new NotFoundException("Source account not found");
    if (owner !== userId) throw new ForbiddenException("You do not own the source account");

    const destinationOwner = await this.repository.findAccountOwner(dto.toAccountId);
    if (!destinationOwner) throw new NotFoundException("Destination account not found");

    // Libera bloqueos de intenciones vencidas antes de intentar crear una nueva
    await this.repository.expireStaleIntents(dto.fromAccountId);

    const created = await this.repository.createTransferIntent({
      userId,
      fromAccountId: dto.fromAccountId,
      toAccountId: dto.toAccountId,
      amount: dto.amount,
      ttlMs: INTENT_TTL_MS,
    });

    if (created) {
      this.logger.log(`Intención ${created.id} creada (cuenta ${dto.fromAccountId} bloqueada).`);
      return toTransferIntentResponse(created);
    }

    // La cuenta ya tiene una intención activa (lo decidió el índice único parcial de la BD)
    const active = await this.repository.findActiveIntent(dto.fromAccountId);
    if (active && this.isSameIntent(active, userId, dto)) {
      // El usuario repitió la MISMA solicitud (doble clic): devolvemos la misma intención
      return toTransferIntentResponse(active);
    }

    throw new ConflictException(
      "Ya existe una transferencia en curso para esta cuenta. Espera a que termine o expire.",
    );
  }

  private isSameIntent(active: TransferIntentRecord, userId: string, dto: TransferFundsDto): boolean {
    return (
      active.status === "CREATED" &&
      active.userId === userId &&
      active.toAccountId === dto.toAccountId &&
      active.amount === dto.amount
    );
  }
}

/**
 * Paso 2: confirma y ejecuta. La transición CREATED -> PROCESSING es atómica en la BD,
 * así que por mucho que se pulse "confirmar", solo UNA petición mueve el dinero.
 */
@Injectable()
export class ConfirmTransferIntentUseCase {
  private readonly logger = new Logger(ConfirmTransferIntentUseCase.name);

  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly repository: ITransactionRepository,
  ) {}

  async execute(userId: string, intentId: string): Promise<TransferIntentResponse> {
    const intent = await this.getOwnedIntent(userId, intentId);

    // Confirmaciones repetidas: no ejecutan nada, devuelven el estado actual
    if (intent.status !== "CREATED") {
      return toTransferIntentResponse(intent);
    }

    const claimed = await this.repository.claimTransferIntent(intentId, INTENT_PROCESSING_TIMEOUT_MS);
    if (!claimed) {
      // Otra petición la tomó primero, o ya expiró
      await this.repository.expireStaleIntents(intent.fromAccountId);
      return toTransferIntentResponse(await this.getOwnedIntent(userId, intentId));
    }

    // El id de la intención se reutiliza como id de transacción (trazabilidad 1:1)
    const transaction = Transaction.create(
      intent.id,
      intent.fromAccountId,
      intent.toAccountId,
      intent.amount,
    );

    try {
      // Mueve saldos + marca COMPLETED + escribe outbox en UNA transacción de BD
      await this.repository.processTransfer(transaction, intent.id);
      this.logger.log(`[EXITO] Intención ${intent.id} completada.`);
    } catch (error: any) {
      this.logger.error(`[FALLO] Intención ${intent.id}: ${error.message}`);
      await this.repository.failTransferIntent(intent.id, error.message);

      if (String(error.message).startsWith("Concurrency Error")) {
        throw new ConflictException("El saldo cambió durante la operación. Intenta de nuevo.");
      }
      throw new BadRequestException(error.message);
    }

    return toTransferIntentResponse(await this.getOwnedIntent(userId, intentId));
  }

  private async getOwnedIntent(userId: string, intentId: string): Promise<TransferIntentRecord> {
    const intent = await this.repository.findTransferIntent(intentId);
    if (!intent || intent.userId !== userId) {
      throw new NotFoundException("Transfer intent not found");
    }
    return intent;
  }
}

/** Consulta del estado de una intención (para que el front haga polling). */
@Injectable()
export class GetTransferIntentUseCase {
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly repository: ITransactionRepository,
  ) {}

  async execute(userId: string, intentId: string): Promise<TransferIntentResponse> {
    const intent = await this.repository.findTransferIntent(intentId);
    if (!intent || intent.userId !== userId) {
      throw new NotFoundException("Transfer intent not found");
    }
    return toTransferIntentResponse(intent);
  }
}
