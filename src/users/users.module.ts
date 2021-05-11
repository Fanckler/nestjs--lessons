import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {CommentsService} from "../comments/comments.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
