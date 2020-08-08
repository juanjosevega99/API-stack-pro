import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { OrdersResolver } from './resolvers/orders.resolver';
import { ProductsResolver } from './resolvers/products.resolver';
import { OrdersService } from './services/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from './../models/order.entity';
import { Product } from './../models/product.entity';
import { User } from './../models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product, Order])],
  providers: [ProductsService, OrdersResolver, ProductsResolver, OrdersService]
})
export class ProductsModule {}
