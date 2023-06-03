import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Order } from 'src/order/schemas/order.schema';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
