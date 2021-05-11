import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {UsersService} from "../users/users.service";
import {CommentsService} from "../comments/comments.service";
import {CommentsModule} from "../comments/comments.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService, UsersService, CommentsService],
  exports: [PostsService]
})
export class PostsModule {}
