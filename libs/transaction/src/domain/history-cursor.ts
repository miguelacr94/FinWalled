/**
 * Cursor opaco para paginación keyset del historial.
 * Codifica (createdAt, id) del último elemento de la página.
 */
export interface HistoryCursor {
  createdAt: Date;
  id: string;
}

export class InvalidHistoryCursorError extends Error {
  constructor() {
    super('Invalid history cursor');
    this.name = 'InvalidHistoryCursorError';
  }
}

export function encodeHistoryCursor(cursor: HistoryCursor): string {
  return Buffer.from(`${cursor.createdAt.toISOString()}|${cursor.id}`, 'utf8').toString('base64url');
}

export function decodeHistoryCursor(raw: string): HistoryCursor {
  try {
    const decoded = Buffer.from(raw, 'base64url').toString('utf8');
    const separator = decoded.indexOf('|');
    if (separator <= 0) throw new InvalidHistoryCursorError();
    const createdAt = new Date(decoded.slice(0, separator));
    const id = decoded.slice(separator + 1);
    if (Number.isNaN(createdAt.getTime()) || !id) throw new InvalidHistoryCursorError();
    return { createdAt, id };
  } catch {
    throw new InvalidHistoryCursorError();
  }
}
