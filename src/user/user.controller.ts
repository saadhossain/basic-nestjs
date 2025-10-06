import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  getById(@Param(':id') id: number) {
    const singleUser = this.usersService.getUserById(id);
    return singleUser;
  }
  @Post()
  createUser(
    @Body() data: { id: number; name: string; email: string; role: string },
  ) {
    const userId = this.usersService.createUser(data);
    return userId;
  }
}
