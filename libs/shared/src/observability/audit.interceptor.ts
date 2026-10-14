import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditLog } from './audit-log.schema.js';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuditInterceptor.name);

  constructor(
    @InjectModel(AuditLog.name) private readonly auditLogModel: Model<AuditLog>,
  ) {}

  /**
   * Enmascara información PII (Personally Identifiable Information)
   * de acuerdo con normativas PCI-DSS y GDPR antes de ir a los logs.
   */
  private maskSensitiveData(data: any): any {
    if (!data || typeof data !== 'object') {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.maskSensitiveData(item));
    }

    const maskedObj = { ...data };
    for (const key of Object.keys(maskedObj)) {
      if (typeof maskedObj[key] === 'object') {
        maskedObj[key] = this.maskSensitiveData(maskedObj[key]);
      } else if (typeof maskedObj[key] === 'string') {
        const lowerKey = key.toLowerCase();
        
        // 1. Ocultar contraseñas y tokens por completo
        if (lowerKey.includes('password') || lowerKey.includes('token') || lowerKey === 'cvv') {
          maskedObj[key] = '********';
        } 
        // 2. Enmascarar Email (ej. m***@gmail.com)
        else if (lowerKey.includes('email')) {
          const [user, domain] = maskedObj[key].split('@');
          if (domain) {
            maskedObj[key] = `${user.charAt(0)}***@${domain}`;
          } else {
            maskedObj[key] = '***@***';
          }
        }
      }
    }
    return maskedObj;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    
    const { method, url, body, user } = request;
    const startTime = Date.now();

    return next.handle().pipe(
      tap(async (data) => {
        const durationMs = Date.now() - startTime;
        
        try {
          // Guardar en MongoDB sin bloquear la respuesta
          await this.auditLogModel.create({
            method,
            url,
            userId: user?.id,
            body: this.maskSensitiveData(body),
            statusCode: response.statusCode,
            durationMs,
            responseBody: this.maskSensitiveData(data),
          });
          this.logger.log(`[Audit] ${method} ${url} - ${durationMs}ms - Guardado en MongoDB`);
        } catch (error: any) {
          this.logger.error(`Error guardando auditoría: ${error.message}`);
        }
      }),
      catchError(async (error) => {
        const durationMs = Date.now() - startTime;
        try {
          await this.auditLogModel.create({
            method,
            url,
            userId: user?.id,
            body: this.maskSensitiveData(body),
            statusCode: error.status || 500,
            durationMs,
            responseBody: { error: error.message },
          });
        } catch (auditError) {}
        throw error;
      }),
    );
  }
}
