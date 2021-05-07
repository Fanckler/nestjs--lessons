import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  findById(id) {
    return {
      title: '',
      desc: '',
      author: this.usersService.findById(1);
    }
  }
}
