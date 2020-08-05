import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
