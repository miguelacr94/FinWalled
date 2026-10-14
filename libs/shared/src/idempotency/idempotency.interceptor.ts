import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdempotencyRecord } from './idempotency.schema.js';

@Injectable()
export class IdempotencyInterceptor implements NestInterceptor {
  private readonly logger = new Logger(IdempotencyInterceptor.name);

  constructor(
    @InjectModel(IdempotencyRecord.name) private readonly idempotencyModel: Model<IdempotencyRecord>,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const idempotencyKey = request.headers['x-idempotency-key'];

    // Si es un método seguro (GET), no aplicamos idempotencia
    if (request.method === 'GET') {
      return next.handle();
    }

    if (!idempotencyKey) {
      throw new BadRequestException('El header x-idempotency-key es obligatorio para esta operación.');
    }

    try {
      // 1. Buscamos si ya procesamos esta llave
      const existingRecord = await this.idempotencyModel.findOne({ key: idempotencyKey });

      if (existingRecord) {
        this.logger.log(`[Idempotency] Petición duplicada interceptada. Devolviendo respuesta en caché para llave: ${idempotencyKey}`);
        return of(existingRecord.response);
      }
    } catch (error) {
      this.logger.error(`Error consultando MongoDB para idempotencia: ${error}`);
    }

    // 2. Si no existe, dejamos que el controlador procese la petición
    return next.handle().pipe(
      tap(async (response) => {
        try {
          // 3. Guardamos la respuesta exitosa para futuras peticiones repetidas
          await this.idempotencyModel.create({
            key: idempotencyKey,
            response,
          });
          this.logger.log(`[Idempotency] Respuesta guardada exitosamente para llave: ${idempotencyKey}`);
        } catch (error: any) {
          // Ignoramos errores de llave duplicada (ej. concurrencia en milisegundos)
          if (error.code !== 11000) {
            this.logger.error(`Error guardando llave de idempotencia: ${error}`);
          }
        }
      }),
    );
  }
}
