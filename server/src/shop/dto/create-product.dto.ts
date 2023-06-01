import { ObjectId } from 'mongoose';

export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly shopId: ObjectId;
}
