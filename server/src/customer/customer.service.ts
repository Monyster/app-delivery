import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const shop = await this.customerModel.create({ ...createCustomerDto });
    return shop;
  }

  findAll() {
    return `This action returns all customer`;
  }

  async findOne(email: string, phone: string): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({
        email,
        phone: `+${phone}`,
      })
      .populate('orders')
      .populate({
        path: 'orders',
        populate: {
          path: 'shopId',
        },
      })
      .populate({
        path: 'orders',
        populate: {
          path: 'orderedProducts',
          populate: {
            path: 'productId',
          },
        },
      })
      .exec();
    return customer;
  }

  async findOneByEmail(email: string): Promise<Customer> {
    const customer = await this.customerModel.findOne({ email });
    return customer;
  }

  async update(updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const { filter, update } = updateCustomerDto;

    const customer = await this.customerModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    return customer;
  }
}
