import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import {PostsService} from "../posts/posts.service";
import {UsersService} from "../users/users.service";
import {PostsModule} from "../posts/posts.module";

@Module({
  imports: [PostsModule],
  controllers: [CommentsController],
  providers: [CommentsService, UsersService],
})
export class CommentsModule {}
