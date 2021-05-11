import {Body, Controller, forwardRef, Get, Inject, Param, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service";

@Controller('comments')
export class CommentsController {

  constructor(
    private readonly commentsService: CommentsService
  ) {
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.commentsService.findById(id);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
}
