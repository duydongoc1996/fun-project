import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create() {
    return this.userService.create();
  }
}
