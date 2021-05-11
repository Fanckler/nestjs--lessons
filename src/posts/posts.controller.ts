import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { PostsService } from "./posts.service";
import {CommentsService} from "../comments/comments.service";

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) {}


  @Get(':id')
  findById(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  addPost(@Body() body) {
    return this.postsService.addPost(body);
  }

  @Post(':postId/comment/:commentId')
  addCommentToPost(@Param() {postId, commentId}) {
    return this.postsService.addCommentToPost(postId, commentId)
  }
}
