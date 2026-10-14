import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class IdempotencyRecord extends Document {
  @Prop({ required: true, unique: true, index: true })
  key: string;

  @Prop({ type: Object, required: true })
  response: any;

  // TTL index: MongoDB borrará este registro automáticamente después de 24 horas
  @Prop({ type: Date, default: Date.now, expires: 86400 })
  createdAt: Date;
}

export const IdempotencyRecordSchema = SchemaFactory.createForClass(IdempotencyRecord);
