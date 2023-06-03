import { ObjectId } from 'mongoose';

export class CreateCustomerDto {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly orders?: ObjectId[];
}
