import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IdempotencyRecord, IdempotencyRecordSchema } from './idempotency.schema.js';
import { IdempotencyInterceptor } from './idempotency.interceptor.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IdempotencyRecord.name, schema: IdempotencyRecordSchema }]),
  ],
  providers: [IdempotencyInterceptor],
  exports: [IdempotencyInterceptor, MongooseModule],
})
export class IdempotencyModule {}
