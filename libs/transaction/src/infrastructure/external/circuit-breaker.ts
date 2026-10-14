export class CircuitOpenError extends Error {
  constructor() {
    super('CIRCUIT_OPEN');
    this.name = 'CircuitOpenError';
  }
}

type CircuitState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';

export interface CircuitBreakerOptions {
  /** Fallos consecutivos que abren el circuito. */
  failureThreshold: number;
  /** Tiempo (ms) con el circuito abierto antes de dejar pasar UNA llamada de prueba. */
  resetTimeoutMs: number;
  /** Decide si un error cuenta como fallo del servicio (p. ej. un rechazo de negocio NO cuenta). */
  isFailure?: (error: unknown) => boolean;
}

/**
 * Circuit breaker mínimo (en memoria, por instancia).
 * CLOSED: todo pasa. OPEN: falla rápido sin llamar al servicio caído.
 * HALF_OPEN: tras `resetTimeoutMs` deja pasar una llamada; si funciona, se cierra.
 */
export class CircuitBreaker {
  private state: CircuitState = 'CLOSED';
  private consecutiveFailures = 0;
  private openedAt = 0;
  private probeInFlight = false;

  constructor(
    private readonly options: CircuitBreakerOptions,
    private readonly now: () => number = Date.now,
  ) {}

  getState(): CircuitState {
    return this.state;
  }

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (this.now() - this.openedAt < this.options.resetTimeoutMs) {
        throw new CircuitOpenError();
      }
      this.state = 'HALF_OPEN';
    }

    if (this.state === 'HALF_OPEN') {
      if (this.probeInFlight) throw new CircuitOpenError();
      this.probeInFlight = true;
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onError(error);
      throw error;
    } finally {
      this.probeInFlight = false;
    }
  }

  private onSuccess(): void {
    this.consecutiveFailures = 0;
    this.state = 'CLOSED';
  }

  private onError(error: unknown): void {
    const countsAsFailure = this.options.isFailure ? this.options.isFailure(error) : true;
    if (!countsAsFailure) {
      // El servicio respondió (aunque rechazó): está vivo.
      this.onSuccess();
      return;
    }
    this.consecutiveFailures++;
    if (this.state === 'HALF_OPEN' || this.consecutiveFailures >= this.options.failureThreshold) {
      this.state = 'OPEN';
      this.openedAt = this.now();
    }
  }
}
