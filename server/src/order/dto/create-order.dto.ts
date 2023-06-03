import { ObjectId } from 'mongoose';

export class CreateOrderDto {
  readonly name: string;
  readonly email: string;
  readonly phone: string;

  readonly deliveryAddress: string;
  readonly shopId: ObjectId;
  readonly orderedProducts: { productId: ObjectId; amount: number }[];
}
