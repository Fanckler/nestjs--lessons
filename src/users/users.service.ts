import {Injectable, NotFoundException} from '@nestjs/common';
import {UserCreateDto} from "./dto/user-create.dto";
import {User} from "./entities/user-endtities";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'qqq@qqq.qqq',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'sss@sss.sss',
    },
    {
      id: 3,
      name: 'User 3',
      email: 'sss@sss.sss',
    },
    {
      id: 4,
      name: 'User 4',
      email: 'sss@sss.sss',
    },
  ];

  findById(id: number): User {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  createUser(user: UserCreateDto): User {
    let lastId = +this.users[this.users.length - 1].id;
    const index = ++lastId;
    const newUser = {
      id: index,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, {email,name}): User {

    let updatedUser = null;

    this.users.map(item => {
      if (item.id == id) {
        item.email = email;
        item.name = name;

        updatedUser = item;
      }
    });

    return updatedUser
  }

  removeUser(id: string): User[] {
    const userIndex = this.users.findIndex((item) => item.id == +id);

    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
    return this.users
  }
}
