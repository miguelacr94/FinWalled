import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client-accounts';
import { Account } from '@app/account';
import {
  ITransactionRepository,
  OutboxEventRecord,
} from '../../domain/repositories/transaction.repository.interface.js';
import { Transaction } from '../../domain/entities/transaction.entity.js';
import {
  ACTIVE_INTENT_STATUSES,
  TransferIntentRecord,
} from '../../domain/entities/transfer-intent.entity.js';
import { ACTIVE_DEPOSIT_STATUSES, DepositRecord } from '../../domain/entities/deposit.entity.js';
import {
  HistoryPage,
  HistoryQuery,
  LedgerEntryRecord,
} from '../../domain/entities/ledger-entry.entity.js';
import { decodeHistoryCursor, encodeHistoryCursor } from '../../domain/history-cursor.js';

const MAX_HISTORY_PAGE_SIZE = 100;
const TX_OPTIONS = { maxWait: 5_000, timeout: 15_000 } as const;

@Injectable()
export class PrismaTransactionRepository implements ITransactionRepository, OnModuleInit {
  private readonly logger = new Logger(PrismaTransactionRepository.name);
  private prisma = new PrismaClient();

  // ---------------------------------------------------------------------------
  // Restricciones que Prisma no puede expresar en el schema (se aplican por SQL, idempotentes)
  // ---------------------------------------------------------------------------
  async onModuleInit(): Promise<void> {
    const statements: { name: string; sql: string }[] = [
      {
        // Una cuenta origen solo puede tener UNA intención activa.
        name: 'transfer_intent_one_active_per_account',
        sql:
          `CREATE UNIQUE INDEX IF NOT EXISTS "transfer_intent_one_active_per_account" ` +
          `ON "TransferIntent" ("fromAccountId") WHERE "status" IN ('CREATED','PROCESSING')`,
      },
      {
        // No pueden existir dos recargas ACTIVAS idénticas (cuenta + monto + tarjeta): anti doble cobro.
        name: 'deposit_one_active_identical',
        sql:
          `CREATE UNIQUE INDEX IF NOT EXISTS "deposit_one_active_identical" ` +
          `ON "Deposit" ("accountId", "amount", "cardToken") WHERE "status" IN ('PENDING','PROCESSING')`,
      },
      {
        // Última línea de defensa: aunque el código tuviera un bug, Postgres rechaza saldos negativos.
        name: 'account_balance_non_negative',
        sql: `
          DO $$
          BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'account_balance_non_negative') THEN
              ALTER TABLE "Account" ADD CONSTRAINT "account_balance_non_negative" CHECK ("balance" >= 0);
            END IF;
          END $$;`,
      },
    ];

    for (const { name, sql } of statements) {
      try {
        await this.prisma.$executeRawUnsafe(sql);
      } catch (error: any) {
        this.logger.warn(`No se pudo aplicar '${name}' (¿ejecutaste 'prisma db push'?): ${error.message}`);
      }
    }
  }

  /**
   * Bloqueo pesimista de filas (SELECT ... FOR UPDATE) dentro de la transacción.
   * Los ids se ordenan siempre igual para que dos operaciones cruzadas (A->B y B->A)
   * adquieran los locks en el mismo orden y nunca caigan en deadlock.
   * Las demás operaciones sobre esas cuentas ESPERAN en lugar de fallar.
   */
  private async lockAccounts(tx: Prisma.TransactionClient, accountIds: string[]): Promise<void> {
    const ordered = [...new Set(accountIds)].sort();
    for (const id of ordered) {
      await tx.$queryRaw`SELECT id FROM "Account" WHERE id = ${id} FOR UPDATE`;
    }
  }

  // ---------------------------------------------------------------------------
  // Transferencias
  // ---------------------------------------------------------------------------

  async processTransfer(transaction: Transaction, intentId?: string): Promise<void> {
    const amount = transaction.getAmount();

    await this.prisma.$transaction(async (tx) => {
      await this.lockAccounts(tx, [transaction.getFromAccountId(), transaction.getToAccountId()]);

      const fromRec = await tx.account.findUniqueOrThrow({ where: { id: transaction.getFromAccountId() } });
      const toRec = await tx.account.findUniqueOrThrow({ where: { id: transaction.getToAccountId() } });

      // Reglas de negocio del dominio (estado ACTIVE, saldo suficiente, monto válido)
      const fromAccount = this.toDomainAccount(fromRec);
      const toAccount = this.toDomainAccount(toRec);
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);

      // Débito protegido: la propia sentencia SQL verifica saldo y versión. Con los locks de fila
      // esto siempre se cumple; es defensa en profundidad si alguien escribiera sin pasar por aquí.
      const debited = await tx.account.updateMany({
        where: { id: fromRec.id, version: fromRec.version, balance: { gte: amount } },
        data: { balance: { decrement: amount }, version: { increment: 1 } },
      });
      if (debited.count === 0) {
        throw new Error('Concurrency Error: Account balance was modified by another process. Please retry.');
      }

      // Incremento atómico en el motor (aritmética Decimal exacta, sin leer-modificar-escribir)
      const credited = await tx.account.update({
        where: { id: toRec.id },
        data: { balance: { increment: amount }, version: { increment: 1 } },
      });

      // Libro mayor (partida doble) = modelo de lectura del historial, en la MISMA transacción
      await tx.ledgerEntry.createMany({
        data: [
          {
            transactionId: transaction.getId(),
            type: 'TRANSFER',
            direction: 'DEBIT',
            accountId: fromRec.id,
            userId: fromRec.userId,
            counterpartyAccountId: toRec.id,
            amount,
            balanceAfter: fromRec.balance.minus(amount),
          },
          {
            transactionId: transaction.getId(),
            type: 'TRANSFER',
            direction: 'CREDIT',
            accountId: toRec.id,
            userId: toRec.userId,
            counterpartyAccountId: fromRec.id,
            amount,
            balanceAfter: credited.balance,
          },
        ],
      });

      // La intención pasa a COMPLETED en la misma transacción que mueve el dinero.
      // Si ya no está PROCESSING (expiró/falló), se aborta y se hace rollback de todo.
      if (intentId) {
        const intentUpdated = await tx.transferIntent.updateMany({
          where: { id: intentId, status: 'PROCESSING' },
          data: { status: 'COMPLETED', transactionId: transaction.getId() },
        });
        if (intentUpdated.count === 0) {
          throw new Error('Transfer intent is no longer active');
        }
      }

      await tx.outboxEvent.create({
        data: {
          aggregateId: transaction.getId(),
          type: 'FUNDS_TRANSFERRED',
          payload: {
            fromAccountId: transaction.getFromAccountId(),
            toAccountId: transaction.getToAccountId(),
            amount,
          },
        },
      });
    }, TX_OPTIONS);
  }

  async findAccountOwner(accountId: string): Promise<string | null> {
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
      select: { userId: true },
    });
    return account?.userId ?? null;
  }

  // ---------------------------------------------------------------------------
  // Intenciones de transferencia
  // ---------------------------------------------------------------------------

  async expireStaleIntents(fromAccountId: string): Promise<void> {
    await this.prisma.transferIntent.updateMany({
      where: {
        fromAccountId,
        status: { in: ACTIVE_INTENT_STATUSES },
        expiresAt: { lt: new Date() },
      },
      data: { status: 'EXPIRED' },
    });
  }

  async createTransferIntent(input: {
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: number;
    ttlMs: number;
  }): Promise<TransferIntentRecord | null> {
    try {
      const row = await this.prisma.transferIntent.create({
        data: {
          userId: input.userId,
          fromAccountId: input.fromAccountId,
          toAccountId: input.toAccountId,
          amount: input.amount,
          expiresAt: new Date(Date.now() + input.ttlMs),
        },
      });
      return this.toIntent(row);
    } catch (error: any) {
      // P2002 = violación del índice único parcial: la cuenta ya tiene una intención activa.
      if (error?.code === 'P2002') return null;
      throw error;
    }
  }

  async findActiveIntent(fromAccountId: string): Promise<TransferIntentRecord | null> {
    const row = await this.prisma.transferIntent.findFirst({
      where: { fromAccountId, status: { in: ACTIVE_INTENT_STATUSES } },
    });
    return row ? this.toIntent(row) : null;
  }

  async findTransferIntent(id: string): Promise<TransferIntentRecord | null> {
    const row = await this.prisma.transferIntent.findUnique({ where: { id } });
    return row ? this.toIntent(row) : null;
  }

  async claimTransferIntent(id: string, processingTimeoutMs: number): Promise<boolean> {
    // UPDATE condicional atómico: solo UNA petición concurrente obtiene count === 1.
    const result = await this.prisma.transferIntent.updateMany({
      where: { id, status: 'CREATED', expiresAt: { gt: new Date() } },
      data: {
        status: 'PROCESSING',
        expiresAt: new Date(Date.now() + processingTimeoutMs),
      },
    });
    return result.count === 1;
  }

  async failTransferIntent(id: string, reason: string): Promise<void> {
    await this.prisma.transferIntent.updateMany({
      where: { id, status: { in: ACTIVE_INTENT_STATUSES } },
      data: { status: 'FAILED', failureReason: reason.slice(0, 500) },
    });
  }

  // ---------------------------------------------------------------------------
  // Recargas
  // ---------------------------------------------------------------------------

  async createDeposit(input: {
    userId: string;
    accountId: string;
    amount: number;
    cardToken: string;
    idempotencyKey?: string;
  }): Promise<{ deposit: DepositRecord; created: boolean }> {
    // Dos intentos: si el duplicado desaparece (se completó) entre el INSERT y el SELECT, se reintenta.
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const row = await this.prisma.deposit.create({
          data: {
            userId: input.userId,
            accountId: input.accountId,
            amount: input.amount,
            cardToken: input.cardToken,
            idempotencyKey: input.idempotencyKey ?? null,
          },
        });
        return { deposit: this.toDeposit(row), created: true };
      } catch (error: any) {
        if (error?.code !== 'P2002') throw error;

        const existing =
          (input.idempotencyKey
            ? await this.prisma.deposit.findUnique({
                where: {
                  userId_idempotencyKey: { userId: input.userId, idempotencyKey: input.idempotencyKey },
                },
              })
            : null) ??
          (await this.prisma.deposit.findFirst({
            where: {
              accountId: input.accountId,
              amount: input.amount,
              cardToken: input.cardToken,
              status: { in: ACTIVE_DEPOSIT_STATUSES },
            },
          }));

        if (existing) return { deposit: this.toDeposit(existing), created: false };
      }
    }
    throw new Error('Could not register the deposit, please retry');
  }

  async findDeposit(id: string): Promise<DepositRecord | null> {
    const row = await this.prisma.deposit.findUnique({ where: { id } });
    return row ? this.toDeposit(row) : null;
  }

  async findDueDepositIds(limit: number): Promise<string[]> {
    const now = new Date();
    const rows = await this.prisma.deposit.findMany({
      where: {
        OR: [
          { status: 'PENDING', nextAttemptAt: { lte: now } },
          { status: 'PROCESSING', lockedUntil: { lt: now } },
        ],
      },
      orderBy: { nextAttemptAt: 'asc' },
      take: limit,
      select: { id: true },
    });
    return rows.map((r) => r.id);
  }

  async claimDeposit(id: string, lockMs: number): Promise<DepositRecord | null> {
    const now = new Date();
    // UPDATE condicional atómico: solo UN worker obtiene count === 1.
    const claimed = await this.prisma.deposit.updateMany({
      where: {
        id,
        OR: [
          { status: 'PENDING', nextAttemptAt: { lte: now } },
          { status: 'PROCESSING', lockedUntil: { lt: now } },
        ],
      },
      data: {
        status: 'PROCESSING',
        attempts: { increment: 1 },
        lockedUntil: new Date(now.getTime() + lockMs),
      },
    });
    if (claimed.count !== 1) return null;
    return this.toDeposit(await this.prisma.deposit.findUniqueOrThrow({ where: { id } }));
  }

  async saveDepositBankReference(id: string, bankReference: string): Promise<void> {
    await this.prisma.deposit.updateMany({
      where: { id, status: 'PROCESSING' },
      data: { bankReference },
    });
  }

  async completeDeposit(id: string): Promise<void> {
    await this.prisma.$transaction(async (tx) => {
      const deposit = await tx.deposit.findUniqueOrThrow({ where: { id } });
      await this.lockAccounts(tx, [deposit.accountId]);

      // Guarda exactly-once: solo se acredita si la recarga sigue PROCESSING.
      const marked = await tx.deposit.updateMany({
        where: { id, status: 'PROCESSING' },
        data: { status: 'COMPLETED', completedAt: new Date(), lockedUntil: null, failureReason: null },
      });
      if (marked.count === 0) {
        throw new Error('Deposit is no longer processing');
      }

      const accountRec = await tx.account.findUniqueOrThrow({ where: { id: deposit.accountId } });
      // Regla de dominio (cuenta ACTIVE, monto > 0)
      this.toDomainAccount(accountRec).deposit(deposit.amount.toNumber());

      const updated = await tx.account.update({
        where: { id: accountRec.id },
        data: { balance: { increment: deposit.amount }, version: { increment: 1 } },
      });

      await tx.ledgerEntry.create({
        data: {
          transactionId: deposit.id,
          type: 'DEPOSIT',
          direction: 'CREDIT',
          accountId: accountRec.id,
          userId: accountRec.userId,
          counterpartyAccountId: null,
          amount: deposit.amount,
          balanceAfter: updated.balance,
        },
      });
    }, TX_OPTIONS);
  }

  async scheduleDepositRetry(
    id: string,
    nextAttemptAt: Date,
    reason: string,
    refundAttempt = false,
  ): Promise<void> {
    await this.prisma.deposit.updateMany({
      where: { id, status: 'PROCESSING' },
      data: {
        status: 'PENDING',
        nextAttemptAt,
        lockedUntil: null,
        failureReason: reason.slice(0, 500),
        ...(refundAttempt ? { attempts: { decrement: 1 } } : {}),
      },
    });
  }

  async failDeposit(id: string, reason: string): Promise<void> {
    await this.prisma.deposit.updateMany({
      where: { id, status: { in: ACTIVE_DEPOSIT_STATUSES } },
      data: { status: 'FAILED', lockedUntil: null, failureReason: reason.slice(0, 500) },
    });
  }

  // ---------------------------------------------------------------------------
  // Historial: paginación keyset sobre el índice (userId, createdAt desc, id desc)
  // ---------------------------------------------------------------------------

  async getHistoryByUser(userId: string, query: HistoryQuery): Promise<HistoryPage> {
    const limit = Math.min(Math.max(Math.trunc(query.limit) || 1, 1), MAX_HISTORY_PAGE_SIZE);
    const cursor = query.cursor ? decodeHistoryCursor(query.cursor) : null;

    const rows = await this.prisma.ledgerEntry.findMany({
      where: {
        userId,
        ...(cursor
          ? {
              OR: [
                { createdAt: { lt: cursor.createdAt } },
                { createdAt: cursor.createdAt, id: { lt: cursor.id } },
              ],
            }
          : {}),
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take: limit + 1, // uno extra para saber si hay más páginas
    });

    const hasMore = rows.length > limit;
    const pageRows = hasMore ? rows.slice(0, limit) : rows;
    const last = pageRows[pageRows.length - 1];

    return {
      items: pageRows.map((r) => this.toLedgerEntry(r)),
      nextCursor: hasMore && last ? encodeHistoryCursor({ createdAt: last.createdAt, id: last.id }) : null,
    };
  }

  // ---------------------------------------------------------------------------
  // Outbox
  // ---------------------------------------------------------------------------

  async publishPendingOutboxEvents(
    publish: (event: OutboxEventRecord) => Promise<void>,
  ): Promise<number> {
    return this.prisma.$transaction(async (tx) => {
      // SKIP LOCKED: varias instancias del worker no se pisan ni publican el mismo evento.
      const events = await tx.$queryRaw<OutboxEventRecord[]>`
        SELECT id, type, payload FROM "OutboxEvent"
        WHERE status = 'PENDING'
        ORDER BY "createdAt" ASC
        LIMIT 50
        FOR UPDATE SKIP LOCKED`;

      let published = 0;
      for (const event of events) {
        try {
          await publish(event);
        } catch (error: any) {
          // Se detiene en el primer fallo (preserva el orden); lo ya publicado se confirma.
          this.logger.error(`Fallo publicando evento Outbox ${event.id}: ${error.message}`);
          break;
        }
        await tx.outboxEvent.update({ where: { id: event.id }, data: { status: 'PUBLISHED' } });
        published++;
      }
      return published;
    }, TX_OPTIONS);
  }

  // ---------------------------------------------------------------------------
  // Mapeos (Decimal de Prisma -> number del dominio)
  // ---------------------------------------------------------------------------

  private toDomainAccount(rec: {
    id: string;
    accountNumber: string;
    bank: string;
    userId: string;
    balance: Prisma.Decimal;
    status: string;
    type: string;
    createdAt: Date;
    version: number;
  }): Account {
    return Account.load(
      rec.id,
      rec.accountNumber,
      rec.bank,
      rec.userId,
      rec.balance.toNumber(),
      rec.status as any,
      rec.type as any,
      rec.createdAt,
      rec.version,
    );
  }

  private toIntent(row: {
    id: string;
    userId: string;
    fromAccountId: string;
    toAccountId: string;
    amount: Prisma.Decimal;
    status: string;
    failureReason: string | null;
    transactionId: string | null;
    expiresAt: Date;
    createdAt: Date;
  }): TransferIntentRecord {
    return {
      id: row.id,
      userId: row.userId,
      fromAccountId: row.fromAccountId,
      toAccountId: row.toAccountId,
      amount: row.amount.toNumber(),
      status: row.status as TransferIntentRecord['status'],
      failureReason: row.failureReason,
      transactionId: row.transactionId,
      expiresAt: row.expiresAt,
      createdAt: row.createdAt,
    };
  }

  private toDeposit(row: {
    id: string;
    userId: string;
    accountId: string;
    amount: Prisma.Decimal;
    cardToken: string;
    idempotencyKey: string | null;
    status: string;
    attempts: number;
    nextAttemptAt: Date;
    lockedUntil: Date | null;
    bankReference: string | null;
    failureReason: string | null;
    createdAt: Date;
    completedAt: Date | null;
  }): DepositRecord {
    return {
      id: row.id,
      userId: row.userId,
      accountId: row.accountId,
      amount: row.amount.toNumber(),
      cardToken: row.cardToken,
      idempotencyKey: row.idempotencyKey,
      status: row.status as DepositRecord['status'],
      attempts: row.attempts,
      nextAttemptAt: row.nextAttemptAt,
      lockedUntil: row.lockedUntil,
      bankReference: row.bankReference,
      failureReason: row.failureReason,
      createdAt: row.createdAt,
      completedAt: row.completedAt,
    };
  }

  private toLedgerEntry(row: {
    id: string;
    transactionId: string;
    type: string;
    direction: string;
    accountId: string;
    userId: string;
    counterpartyAccountId: string | null;
    amount: Prisma.Decimal;
    balanceAfter: Prisma.Decimal;
    createdAt: Date;
  }): LedgerEntryRecord {
    return {
      id: row.id,
      transactionId: row.transactionId,
      type: row.type as LedgerEntryRecord['type'],
      direction: row.direction as LedgerEntryRecord['direction'],
      accountId: row.accountId,
      userId: row.userId,
      counterpartyAccountId: row.counterpartyAccountId,
      amount: row.amount.toNumber(),
      balanceAfter: row.balanceAfter.toNumber(),
      createdAt: row.createdAt,
    };
  }
}
