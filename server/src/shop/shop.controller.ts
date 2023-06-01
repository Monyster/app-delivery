import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('/shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.shopService.findOne(id);
  }

  @Post('/product')
  addProduct(@Body() createProductDto: CreateProductDto) {
    return this.shopService.addProduct(createProductDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
  //   return this.shopService.update(+id, updateShopDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shopService.remove(+id);
  // }
}
