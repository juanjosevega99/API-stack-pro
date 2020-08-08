import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { OrdersResolver } from './resolvers/orders.resolver';
import { ProductsResolver } from './resolvers/products.resolver';

@Module({
  providers: [ProductsService, OrdersResolver, ProductsResolver]
})
export class ProductsModule {}
