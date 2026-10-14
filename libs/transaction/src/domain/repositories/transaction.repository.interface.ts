import { Transaction } from "../entities/transaction.entity.js";
import type { TransferIntentRecord } from "../entities/transfer-intent.entity.js";
import type { DepositRecord } from "../entities/deposit.entity.js";
import type { HistoryPage, HistoryQuery } from "../entities/ledger-entry.entity.js";

export const TRANSACTION_REPOSITORY = Symbol("TRANSACTION_REPOSITORY");

export interface OutboxEventRecord {
  id: string;
  type: string;
  payload: any;
}

export interface ITransactionRepository {
  // ---------------------------------------------------------------------------
  // Transferencias
  // ---------------------------------------------------------------------------

  /**
   * Ejecuta una transferencia de manera atómica: locks de fila (FOR UPDATE, en orden fijo),
   * débito protegido, crédito, asientos del libro mayor, evento Outbox y, si se pasa `intentId`,
   * la intención PROCESSING -> COMPLETED. Todo en UNA transacción de base de datos.
   */
  processTransfer(transaction: Transaction, intentId?: string): Promise<void>;

  /** Devuelve el userId dueño de la cuenta, o null si no existe. */
  findAccountOwner(accountId: string): Promise<string | null>;

  // ---------------------------------------------------------------------------
  // Intenciones de transferencia (emitidas por el servidor)
  // ---------------------------------------------------------------------------

  /** Pasa a EXPIRED las intenciones activas vencidas de una cuenta origen (libera el bloqueo). */
  expireStaleIntents(fromAccountId: string): Promise<void>;

  /**
   * Crea una intención. Devuelve null si la cuenta origen ya tiene una intención activa
   * (lo impone un índice único parcial en la base de datos).
   */
  createTransferIntent(input: {
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: number;
    ttlMs: number;
  }): Promise<TransferIntentRecord | null>;

  findActiveIntent(fromAccountId: string): Promise<TransferIntentRecord | null>;

  findTransferIntent(id: string): Promise<TransferIntentRecord | null>;

  /**
   * Transición atómica CREATED -> PROCESSING. Devuelve true solo para UNA petición,
   * las demás reciben false y no deben ejecutar nada.
   */
  claimTransferIntent(id: string, processingTimeoutMs: number): Promise<boolean>;

  /** Marca la intención como FAILED (libera el bloqueo de la cuenta origen). */
  failTransferIntent(id: string, reason: string): Promise<void>;

  // ---------------------------------------------------------------------------
  // Recargas (la BD es la fuente de verdad; el banco es lento y falla)
  // ---------------------------------------------------------------------------

  /**
   * Registra la recarga. Es idempotente a nivel de BD: si ya existe una recarga con la misma
   * llave del cliente, o una recarga ACTIVA idéntica (cuenta + monto + tarjeta), devuelve esa
   * y `created = false`. Nunca crea dos cobros simultáneos iguales.
   */
  createDeposit(input: {
    userId: string;
    accountId: string;
    amount: number;
    cardToken: string;
    idempotencyKey?: string;
  }): Promise<{ deposit: DepositRecord; created: boolean }>;

  findDeposit(id: string): Promise<DepositRecord | null>;

  /** Ids de recargas que toca procesar: PENDING vencidas o PROCESSING con lock expirado. */
  findDueDepositIds(limit: number): Promise<string[]>;

  /**
   * Toma la recarga de forma atómica (PENDING|PROCESSING caducada -> PROCESSING) e incrementa
   * `attempts`. Devuelve null si otro worker la tomó o aún no toca.
   */
  claimDeposit(id: string, lockMs: number): Promise<DepositRecord | null>;

  /** Persiste la referencia del banco apenas aprueba el cobro (antes de acreditar). */
  saveDepositBankReference(id: string, bankReference: string): Promise<void>;

  /**
   * Acredita el saldo, escribe el asiento del libro mayor y marca la recarga COMPLETED
   * en UNA transacción. Solo funciona si la recarga sigue PROCESSING (acreditación exactly-once).
   */
  completeDeposit(id: string): Promise<void>;

  /** Devuelve la recarga a PENDING con un siguiente intento programado (backoff). */
  scheduleDepositRetry(
    id: string,
    nextAttemptAt: Date,
    reason: string,
    refundAttempt?: boolean,
  ): Promise<void>;

  failDeposit(id: string, reason: string): Promise<void>;

  // ---------------------------------------------------------------------------
  // Historial (lectura optimizada sobre el libro mayor)
  // ---------------------------------------------------------------------------

  /** Historial paginado por cursor (keyset), usando el índice (userId, createdAt desc, id desc). */
  getHistoryByUser(userId: string, query: HistoryQuery): Promise<HistoryPage>;

  // ---------------------------------------------------------------------------
  // Outbox
  // ---------------------------------------------------------------------------

  /**
   * Publica en orden los eventos PENDING. Usa `FOR UPDATE SKIP LOCKED`, así varias instancias
   * del worker pueden correr a la vez sin publicar el mismo evento dos veces. Un evento solo se
   * marca PUBLISHED si `publish` confirma; ante el primer fallo se detiene (conserva el orden).
   * Devuelve cuántos eventos se publicaron.
   */
  publishPendingOutboxEvents(
    publish: (event: OutboxEventRecord) => Promise<void>,
  ): Promise<number>;
}
