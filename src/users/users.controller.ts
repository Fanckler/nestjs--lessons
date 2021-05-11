import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UserCreateDto} from "./dto/user-create.dto";
import {User} from "./entities/user-endtities";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number)  {
    return this.usersService.findById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query): User[] {
    return this.usersService.findAll()
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userCreateDto: UserCreateDto): User {
    return this.usersService.createUser(userCreateDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Patch(':id')
  updateUser(@Param('id') id, @Body() body): User {
    return this.usersService.updateUser(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  deleteUser(@Param("id") id: string): User[] {
    return this.usersService.removeUser(id);
  }
}
