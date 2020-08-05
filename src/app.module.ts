import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'interface',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
