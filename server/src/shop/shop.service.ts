import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop, ShopDocument } from './schemas/shop.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateShopDto } from './dto/create-shop.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel(Shop.name) private shopModel: Model<ShopDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createShopDto: CreateShopDto): Promise<Shop> {
    const shop = await this.shopModel.create({ ...createShopDto });
    return shop;
  }

  async findAll(): Promise<Shop[]> {
    const shops = await this.shopModel.find();
    return shops;
  }

  async findOne(id: ObjectId): Promise<Shop> {
    const shop = await this.shopModel.findById(id).populate('products');
    return shop;
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    const shop = await this.shopModel.findById(createProductDto.shopId);
    const product = await this.productModel.create({ ...createProductDto });
    shop.products.push(product.id);
    await shop.save();
    return product;
  }
  // update(id: number, updateShopDto: UpdateShopDto) {
  //   return `This action updates a #${id} shop`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} shop`;
  // }
}
