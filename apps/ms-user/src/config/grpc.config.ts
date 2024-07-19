import { ReflectionService } from '@grpc/reflection';
import { ConfigService } from '@nestjs/config';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoPath = join(__dirname, './common/protos/users.proto');

export class GrpcConfiguration {
  constructor(private configService: ConfigService) {}

  getServerOptions(): GrpcOptions {
    const url = this.configService.get('GRPC_SERVER_URL');
    return {
      transport: Transport.GRPC,
      options: {
        package: 'users',
        protoPath: protoPath,
        onLoadPackageDefinition: (pkg, server) => {
          return new ReflectionService(pkg).addToServer(server);
        },
        url,
      },
    };
  }

  getClientOptions(): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        package: 'users',
        protoPath: protoPath,
        loader: {
          keepCase: true,
        },
      },
    };
  }
}
