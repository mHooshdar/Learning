import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getUsers(): Promise<User[]> {
    return this.usersService.getUser();
  }
}
