import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, now } from 'mongoose';
import { Customer } from 'src/customer/schemas/customer.schema';
import { Product } from 'src/shop/schemas/product.schema';
import { Shop } from 'src/shop/schemas/shop.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ required: true, default: now() })
  orderDate: Date;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  deliveryAddress: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Customer' })
  customerId: Customer;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Shop' })
  shopId: Shop;

  @Prop({
    required: true,
    min: 1,
    type: [
      { productId: { type: Types.ObjectId, ref: 'Product' }, amount: Number },
    ],
  })
  orderedProducts: { productId: Product; amount: number }[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
