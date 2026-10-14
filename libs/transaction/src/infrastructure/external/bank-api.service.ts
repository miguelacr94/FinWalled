import { Injectable, Logger } from '@nestjs/common';

/** Fallo transitorio (timeout, conexión): se puede reintentar sin riesgo. */
export class BankTransientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BankTransientError';
  }
}

/** Rechazo definitivo del banco (fondos insuficientes, tarjeta inválida): NO se reintenta. */
export class BankRejectedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BankRejectedError';
  }
}

interface BankApiOptions {
  minLatencyMs: number;
  maxLatencyMs: number;
  connectionFailureRate: number;
  rejectionRate: number;
}

function readNumberEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  const parsed = raw === undefined ? NaN : Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * Simulación del banco externo legacy: lento y con fallos de conexión.
 * Los parámetros se pueden ajustar por variables de entorno (útil para pruebas):
 *   BANK_API_MIN_LATENCY_MS, BANK_API_MAX_LATENCY_MS,
 *   BANK_API_FAILURE_RATE, BANK_API_REJECTION_RATE
 */
@Injectable()
export class BankApiService {
  private readonly logger = new Logger(BankApiService.name);

  /**
   * Cobros ya aprobados por referencia. Simula la IDEMPOTENCIA del banco: cobrar dos veces
   * con la misma referencia no vuelve a debitar la tarjeta. Un banco real debe ofrecer esto
   * (idempotency key / reference); es lo que hace seguro reintentar tras un timeout.
   */
  private readonly approvedCharges = new Map<string, string>();

  private getOptions(): BankApiOptions {
    return {
      minLatencyMs: readNumberEnv('BANK_API_MIN_LATENCY_MS', 5_000),
      maxLatencyMs: readNumberEnv('BANK_API_MAX_LATENCY_MS', 15_000),
      connectionFailureRate: readNumberEnv('BANK_API_FAILURE_RATE', 0.2),
      rejectionRate: readNumberEnv('BANK_API_REJECTION_RATE', 0.05),
    };
  }

  /**
   * Cobra a la tarjeta de débito.
   * @param reference Identificador estable de la operación (id de la recarga). Es la llave de idempotencia.
   * @returns La referencia asignada por el banco.
   * @throws BankTransientError si falla la conexión; BankRejectedError si el banco rechaza el cobro.
   */
  async charge(reference: string, amount: number, cardToken: string): Promise<string> {
    const alreadyApproved = this.approvedCharges.get(reference);
    if (alreadyApproved) {
      this.logger.log(`[BankAPI] Cobro ${reference} ya aprobado antes; se devuelve el mismo resultado.`);
      return alreadyApproved;
    }

    this.logger.log(`Iniciando conexión con el Banco Externo para debitar $${amount} (ref ${reference})...`);

    const { minLatencyMs, maxLatencyMs, connectionFailureRate, rejectionRate } = this.getOptions();
    const delayMs = Math.floor(Math.random() * Math.max(maxLatencyMs - minLatencyMs, 0)) + minLatencyMs;
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    if (Math.random() < connectionFailureRate) {
      this.logger.error(`[BankAPI Error] Se perdió la conexión con el servidor bancario tras ${delayMs}ms.`);
      throw new BankTransientError('BANK_CONNECTION_TIMEOUT');
    }

    if (Math.random() < rejectionRate) {
      this.logger.warn(`[BankAPI Refused] Tarjeta ${cardToken} denegada por fondos insuficientes.`);
      throw new BankRejectedError('INSUFFICIENT_FUNDS_IN_CARD');
    }

    const bankReference = `BANK-${reference.slice(0, 8)}-${Date.now()}`;
    this.approvedCharges.set(reference, bankReference);
    this.logger.log(`[BankAPI Success] Depósito de $${amount} procesado correctamente en ${delayMs}ms.`);
    return bankReference;
  }
}
