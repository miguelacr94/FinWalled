import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditLog, AuditLogSchema } from './audit-log.schema.js';
import { AuditInterceptor } from './audit.interceptor.js';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuditLog.name, schema: AuditLogSchema }]),
  ],
  providers: [AuditInterceptor],
  exports: [AuditInterceptor, MongooseModule],
})
export class ObservabilityModule {}
