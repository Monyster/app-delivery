import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private customerService: CustomerService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { name, email, phone, deliveryAddress, shopId, orderedProducts } =
      createOrderDto;

    if (orderedProducts.length == 0) {
      return;
    }

    // Check is customer exist?
    let customer = await this.customerService.findOneByEmail(email.trim());

    if (!customer) {
      // create new customer
      customer = await this.customerService.create({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        address: deliveryAddress.trim(),
        orders: [],
      });

      //If cant create - decline order
      if (!customer) {
        return;
      }
    }

    const order = await this.orderModel.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      customerId: customer['_id'],
      shopId: shopId,
      orderedProducts,
    });

    //If customer present
    customer.orders.push(order.id);

    customer = await this.customerService.update({
      filter: { email: customer.email },
      update: { orders: customer.orders },
    });

    return order;
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
