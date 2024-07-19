import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create() {
    return this.userService.create();
  }

  @GrpcMethod(UsersService.name)
  findOne(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): any {
    console.log('data', data);
    console.log('metadata', metadata);
    console.log('call', call);

    return this.userService.findOne(data.id);
  }
}
