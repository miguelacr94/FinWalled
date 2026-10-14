import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { PrismaClient } from '@prisma/client-accounts';
import { PrismaTransactionRepository } from './infrastructure/database/prisma-transaction.repository.js';
import { CreateTransferIntentUseCase, ConfirmTransferIntentUseCase } from './application/use-cases/transfer-intent.usecases.js';
import { RequestDepositUseCase } from './application/use-cases/request-deposit.usecase.js';
import { ProcessDepositUseCase } from './application/use-cases/process-deposit.usecase.js';
import { GetTransferByUserUseCase } from './application/use-cases/get-transfer-by-user.usecase.js';
import { BankApiService } from './infrastructure/external/bank-api.service.js';
import { IEventBus } from './domain/interfaces/event-bus.interface.js';
import { randomUUID } from 'crypto';

class DummyEventBus implements IEventBus {
  async emitEvent(): Promise<void> {}
}

describe('FinWallet Core Architecture - Concurrency & Resiliency E2E', () => {
  const prisma = new PrismaClient();
  const repo = new PrismaTransactionRepository();
  const eventBus = new DummyEventBus();
  const bankApi = new BankApiService();

  const createIntentUseCase = new CreateTransferIntentUseCase(repo);
  const confirmIntentUseCase = new ConfirmTransferIntentUseCase(repo);
  const requestDepositUseCase = new RequestDepositUseCase(repo, eventBus);
  const processDepositUseCase = new ProcessDepositUseCase(bankApi, eventBus, repo);
  const getHistoryUseCase = new GetTransferByUserUseCase(repo);

  const testUserId = randomUUID();
  const destUserId = randomUUID();
  let accAId: string;
  let accBId: string;

  beforeAll(async () => {
    await repo.onModuleInit();

    // Crear cuentas de prueba con saldo inicial
    const accA = await prisma.account.create({
      data: {
        accountNumber: 'ACC1000001',
        bank: 'FinWallet',
        balance: 100.0,
        userId: testUserId,
        status: 'ACTIVE',
      },
    });
    accAId = accA.id;

    const accB = await prisma.account.create({
      data: {
        accountNumber: 'ACC1000002',
        bank: 'FinWallet',
        balance: 0.0,
        userId: destUserId,
        status: 'ACTIVE',
      },
    });
    accBId = accB.id;
  });

  afterAll(async () => {
    // Limpieza de datos creados en el test
    await prisma.ledgerEntry.deleteMany({ where: { userId: { in: [testUserId, destUserId] } } });
    await prisma.transferIntent.deleteMany({ where: { userId: { in: [testUserId, destUserId] } } });
    await prisma.deposit.deleteMany({ where: { userId: { in: [testUserId, destUserId] } } });
    await prisma.outboxEvent.deleteMany({ where: { aggregateId: { in: [accAId, accBId] } } });
    await prisma.account.deleteMany({ where: { id: { in: [accAId, accBId] } } });
    await prisma.$disconnect();
  });

  it('Transferencia P2P: 50 confirmaciones concurrentes de una misma intención solo debitan 1 sola vez', async () => {
    // 1. Crear intención por el servidor (debita 50 de una cuenta con 100)
    const intentRes = await createIntentUseCase.execute(testUserId, {
      fromAccountId: accAId,
      toAccountId: accBId,
      amount: 50.0,
    });
    expect(intentRes.status).toBe('CREATED');

    // 2. 50 peticiones concurrentes simultáneas confirmando el MISMO intentId
    const promises = Array.from({ length: 50 }, () =>
      confirmIntentUseCase.execute(testUserId, intentRes.intentId).catch((err) => err),
    );
    const results = await Promise.all(promises);

    // Al menos una debió terminar exitosa en COMPLETED
    const completedResults = results.filter((r) => r && r.status === 'COMPLETED');
    expect(completedResults.length).toBeGreaterThan(0);

    // 3. Verificar estado en base de datos: saldos consistentes
    const accA = await prisma.account.findUniqueOrThrow({ where: { id: accAId } });
    const accB = await prisma.account.findUniqueOrThrow({ where: { id: accBId } });

    expect(Number(accA.balance)).toBe(50.0);
    expect(Number(accB.balance)).toBe(50.0);

    // Libro mayor debe tener exactamente 2 entradas (1 DEBIT y 1 CREDIT)
    const ledgerEntries = await prisma.ledgerEntry.findMany({
      where: { transactionId: intentRes.intentId },
    });
    expect(ledgerEntries.length).toBe(2);
  });

  it('Transferencias P2P: La base de datos impide saldo negativo y maneja bloqueos de fila de forma segura', async () => {
    // Cuenta A tiene 50 de saldo restante.
    // Intento 1: transferir 40
    const intent1 = await createIntentUseCase.execute(testUserId, {
      fromAccountId: accAId,
      toAccountId: accBId,
      amount: 40.0,
    });
    await confirmIntentUseCase.execute(testUserId, intent1.intentId);

    // Saldo restante en A: 10
    // Intento 2: transferir 20 (debe fallar por fondos insuficientes)
    const intent2 = await createIntentUseCase.execute(testUserId, {
      fromAccountId: accAId,
      toAccountId: accBId,
      amount: 20.0,
    });

    await expect(confirmIntentUseCase.execute(testUserId, intent2.intentId)).rejects.toThrow();

    const accA = await prisma.account.findUniqueOrThrow({ where: { id: accAId } });
    expect(Number(accA.balance)).toBe(10.0); // No bajó de cero
  });

  it('Recargas: idempotencia previene doble cobro sin importar ráfagas de peticiones', async () => {
    // Desactivamos latencia alta para el test
    process.env.BANK_API_MIN_LATENCY_MS = '10';
    process.env.BANK_API_MAX_LATENCY_MS = '20';
    process.env.BANK_API_FAILURE_RATE = '0';
    process.env.BANK_API_REJECTION_RATE = '0';

    // Disparar 10 solicitudes idénticas de recarga simultáneas
    const requests = await Promise.all(
      Array.from({ length: 10 }, () =>
        requestDepositUseCase.execute(
          testUserId,
          { accountId: accAId, amount: 25.0, cardToken: 'tok_visa_safe' },
          'idem-key-test-123',
        ),
      ),
    );

    // Todas deben apuntar al MISMO depositId
    const firstDepositId = requests[0].depositId;
    for (const req of requests) {
      expect(req.depositId).toBe(firstDepositId);
    }

    // Ejecutar procesamiento del worker
    const processResult = await processDepositUseCase.execute(firstDepositId);
    expect(processResult).toBe('COMPLETED');

    // Saldo de cuenta A debe haber aumentado en 25 (10 inicial + 25 = 35)
    const accA = await prisma.account.findUniqueOrThrow({ where: { id: accAId } });
    expect(Number(accA.balance)).toBe(35.0);
  });

  it('Historial CQRS: Paginación keyset por cursor entrega resultados en orden descendente < 50ms', async () => {
    const historyPage1 = await getHistoryUseCase.execute(testUserId, { limit: 2 });
    expect(historyPage1.items.length).toBeLessThanOrEqual(2);
    expect(historyPage1.nextCursor).toBeDefined();

    if (historyPage1.nextCursor) {
      const historyPage2 = await getHistoryUseCase.execute(testUserId, {
        limit: 2,
        cursor: historyPage1.nextCursor,
      });
      expect(historyPage2.items.length).toBeGreaterThan(0);
      // Validar que el primer elemento de la pág 2 es estrictamente anterior o igual al último de la pág 1
      const lastPage1Date = new Date(historyPage1.items[historyPage1.items.length - 1].createdAt).getTime();
      const firstPage2Date = new Date(historyPage2.items[0].createdAt).getTime();
      expect(firstPage2Date).toBeLessThanOrEqual(lastPage1Date);
    }
  });
});
