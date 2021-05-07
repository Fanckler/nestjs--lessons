import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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

  findById(id: any) {
    return this.users.find(item => item.id == id);
  }

  findAll() {
    return this.users;
  }

  createUser(user) {
    const newUser = {
      id: String(new Date().getTime()),
      ...user
    };
    this.users.push(newUser);
    return newUser.id;
  }

  updateUser(id, {email,name}) {

    this.users.map(item => {
      if (item.id == id) {
        item.email = email;
        item.name = name;
      }
    });

    return 'OK'
  }

  removeUser(id: string) {
    const userIndex = this.users.findIndex((item: any) => item.id == +id);
    console.log(id, userIndex);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
    return this.users
  }
}
