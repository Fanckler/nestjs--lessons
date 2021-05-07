import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @Get(':id')
  findById(@Param('id') id: string)  {
    return this.usersService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() body): string {
    return this.usersService.createUser(body);
  }

  @HttpCode(HttpStatus.CREATED)
  @Patch(':id')
  updateUser(@Param('id') id, @Body() body) {
    return this.usersService.updateUser(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.usersService.removeUser(id);
  }
}
