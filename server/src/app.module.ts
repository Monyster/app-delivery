import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';

import ShopModule from './shop/shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri:
          config.get<string>('database.host') +
          ':' +
          config.get<string>('database.port'),
        dbName: config.get<string>('database.name'),

        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ShopModule,
    OrderModule,
    CustomerModule,
  ],
})
export class AppModule {}
