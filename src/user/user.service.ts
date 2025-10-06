import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'Owner',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'Owner',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'Admin',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'User',
    },
  ];
  constructor() {}
  getAllUsersQuery(role?: 'Admin' | 'User' | 'Owner') {
    if (role) {
      const filteredUsers = this.users.filter((u) => u.role === role);
      return filteredUsers;
    }
    return this.users;
  }
  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    return user;
  }
  createUser(user: { id: number; name: string; email: string; role: string }) {
    const dataCount = this.users.length;
    user.id = dataCount + 1;
    this.users.push(user);
    return user.id;
  }
}
