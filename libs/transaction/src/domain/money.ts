/** Máximo permitido por operación (evita overflow/errores de captura). */
export const MAX_MONEY_AMOUNT = 1_000_000_000;

/**
 * Un monto es válido si es un número finito, positivo, con como máximo 2 decimales
 * y por debajo del máximo. Evita que entren valores como 0.1000000001 o NaN
 * que luego producirían errores de redondeo en el dinero.
 */
export function isValidMoneyAmount(amount: unknown): amount is number {
  if (typeof amount !== 'number' || !Number.isFinite(amount)) return false;
  if (amount <= 0 || amount > MAX_MONEY_AMOUNT) return false;
  const cents = amount * 100;
  return Math.abs(cents - Math.round(cents)) < 1e-6;
}

export function assertValidMoneyAmount(amount: unknown, label = 'Amount'): asserts amount is number {
  if (!isValidMoneyAmount(amount)) {
    throw new Error(
      `${label} must be a positive number with at most 2 decimals (max ${MAX_MONEY_AMOUNT})`,
    );
  }
}
