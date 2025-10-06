import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get()
  getAllUser(@Query('role') role?: 'Admin' | 'User' | 'Owner') {
    const users = this.usersService.getAllUsersQuery(role);
    return { data: users };
  }
  @Get()
  getById(@Param(':id') id: string) {
    // const singleUser
  }
}
