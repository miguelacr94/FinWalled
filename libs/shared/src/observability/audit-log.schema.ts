import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class AuditLog extends Document {
  @Prop({ required: true })
  method: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  userId?: string;

  @Prop({ type: Object })
  body: any;

  @Prop()
  statusCode: number;

  @Prop()
  durationMs: number;

  @Prop({ type: Object })
  responseBody?: any;
}

export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);
