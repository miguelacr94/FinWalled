import { Injectable, Logger, Inject } from "@nestjs/common";
import { BrokerEvents } from "@app/shared";
import { TRANSACTION_REPOSITORY } from "../../domain/repositories/transaction.repository.interface.js";
import type { ITransactionRepository } from "../../domain/repositories/transaction.repository.interface.js";
import { EVENT_BUS_PORT } from "../../domain/interfaces/event-bus.interface.js";
import type { IEventBus } from "../../domain/interfaces/event-bus.interface.js";
import {
  BankApiService,
  BankRejectedError,
  BankTransientError,
} from "../../infrastructure/external/bank-api.service.js";
import {
  CircuitBreaker,
  CircuitOpenError,
} from "../../infrastructure/external/circuit-breaker.js";
import type { DepositRecord } from "../../domain/entities/deposit.entity.js";

/** Intentos máximos contra el banco antes de rendirse (FAILED). */
export const DEPOSIT_MAX_ATTEMPTS = 6;
/** Lock del worker sobre la recarga. Debe superar la latencia máxima del banco (~25 s). */
export const DEPOSIT_LOCK_MS = 60_000;
const BACKOFF_BASE_MS = 2_000;
const BACKOFF_MAX_MS = 5 * 60_000;
/** Espera cuando el circuito está abierto (no consume intentos). */
const CIRCUIT_OPEN_RETRY_MS = 15_000;

/** Backoff exponencial con jitter: ~2s, 4s, 8s, 16s... hasta 5 min. */
export function computeBackoffMs(attempt: number, random: () => number = Math.random): number {
  const exponential = Math.min(BACKOFF_BASE_MS * 2 ** Math.max(attempt - 1, 0), BACKOFF_MAX_MS);
  const jitter = exponential * 0.2 * random(); // +0..20 % para no sincronizar reintentos
  return Math.round(exponential + jitter);
}

export type DepositProcessingResult = "SKIPPED" | "COMPLETED" | "RETRY_SCHEDULED" | "FAILED";

/**
 * Procesa UNA recarga. Nunca lanza: todo resultado (éxito, reintento, fallo) queda
 * persistido en la BD, que es la fuente de verdad. Así un mensaje perdido o un crash no dejan
 * recargas huérfanas: el sweeper vuelve a tomarlas cuando vencen.
 *
 * Garantía de no-doble-cobro:
 *  1. Solo un worker toma la recarga (claim atómico).
 *  2. El banco recibe el id de la recarga como referencia idempotente.
 *  3. La referencia del banco se guarda antes de acreditar; si acreditar falla, el reintento
 *     NO vuelve a llamar al banco.
 *  4. Acreditar + marcar COMPLETED + asiento contable ocurren en una sola transacción.
 */
@Injectable()
export class ProcessDepositUseCase {
  private readonly logger = new Logger(ProcessDepositUseCase.name);

  // Solo los fallos de conexión abren el circuito; un rechazo de negocio significa que el banco está vivo.
  private readonly breaker = new CircuitBreaker({
    failureThreshold: 5,
    resetTimeoutMs: 30_000,
    isFailure: (error) => !(error instanceof BankRejectedError),
  });

  constructor(
    @Inject(BankApiService)
    private readonly bankApiService: BankApiService,
    @Inject(EVENT_BUS_PORT) private readonly eventBus: IEventBus,
    @Inject(TRANSACTION_REPOSITORY)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(depositId: string): Promise<DepositProcessingResult> {
    const deposit = await this.transactionRepository.claimDeposit(depositId, DEPOSIT_LOCK_MS);
    if (!deposit) {
      // Otro worker la tiene, ya terminó, o todavía no toca (backoff)
      return "SKIPPED";
    }

    this.logger.log(
      `Procesando depósito ${deposit.id} (intento ${deposit.attempts}/${DEPOSIT_MAX_ATTEMPTS}) para la cuenta ${deposit.accountId}...`,
    );

    // 1. Cobro al banco (se omite si ya fue aprobado en un intento anterior)
    let bankReference = deposit.bankReference;
    if (!bankReference) {
      try {
        bankReference = await this.breaker.execute(() =>
          this.bankApiService.charge(deposit.id, deposit.amount, deposit.cardToken),
        );
        await this.transactionRepository.saveDepositBankReference(deposit.id, bankReference);
      } catch (error: any) {
        return this.handleBankError(deposit, error);
      }
    }

    // 2. Acreditación atómica (saldo + asiento contable + estado COMPLETED)
    try {
      await this.transactionRepository.completeDeposit(deposit.id);
    } catch (error: any) {
      if (String(error?.message).includes("no longer processing")) {
        // Otro worker tomó la recarga tras vencer nuestro lock: ya no es nuestra.
        return "SKIPPED";
      }
      this.logger.error(
        `[CRÉDITO FALLÓ] Depósito ${deposit.id}: el banco YA cobró (${bankReference}) pero no se pudo acreditar: ${error.message}`,
      );
      return this.retryOrFail(deposit, `CREDIT_FAILED: ${error.message}`, true);
    }

    this.logger.log(`[EXITO] Depósito ${deposit.id} completado. Saldo acreditado a ${deposit.accountId}.`);

    // 3. Notificación: best-effort (el dinero ya está acreditado y registrado)
    try {
      await this.eventBus.emitEvent(BrokerEvents.DEPOSIT_COMPLETED, {
        depositId: deposit.id,
        accountId: deposit.accountId,
        amount: deposit.amount,
      });
    } catch (error: any) {
      this.logger.warn(`No se pudo emitir la notificación del depósito ${deposit.id}: ${error.message}`);
    }
    return "COMPLETED";
  }

  private async handleBankError(deposit: DepositRecord, error: any): Promise<DepositProcessingResult> {
    if (error instanceof BankRejectedError) {
      this.logger.warn(`[RECHAZADO] Depósito ${deposit.id}: ${error.message}`);
      await this.transactionRepository.failDeposit(deposit.id, error.message);
      return "FAILED";
    }

    if (error instanceof CircuitOpenError) {
      // El banco está caído: no gastamos el intento ni lo golpeamos; reintentamos más tarde.
      await this.transactionRepository.scheduleDepositRetry(
        deposit.id,
        new Date(Date.now() + CIRCUIT_OPEN_RETRY_MS),
        "CIRCUIT_OPEN",
        true,
      );
      return "RETRY_SCHEDULED";
    }

    const reason = error instanceof BankTransientError ? error.message : `UNEXPECTED: ${error?.message}`;
    return this.retryOrFail(deposit, reason, false);
  }

  private async retryOrFail(
    deposit: DepositRecord,
    reason: string,
    bankAlreadyCharged: boolean,
  ): Promise<DepositProcessingResult> {
    if (deposit.attempts >= DEPOSIT_MAX_ATTEMPTS) {
      const finalReason = bankAlreadyCharged
        ? `BANK_CHARGED_NOT_CREDITED - requiere conciliación manual: ${reason}`
        : `MAX_ATTEMPTS_REACHED: ${reason}`;
      this.logger.error(`[FALLO] Depósito ${deposit.id}: ${finalReason}`);
      await this.transactionRepository.failDeposit(deposit.id, finalReason);
      return "FAILED";
    }

    const delay = computeBackoffMs(deposit.attempts);
    this.logger.warn(
      `[REINTENTO] Depósito ${deposit.id} (${reason}). Próximo intento en ${Math.round(delay / 1000)}s.`,
    );
    await this.transactionRepository.scheduleDepositRetry(
      deposit.id,
      new Date(Date.now() + delay),
      reason,
    );
    return "RETRY_SCHEDULED";
  }
}
