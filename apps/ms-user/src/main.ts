import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { GrpcConfiguration } from './config/grpc.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  });

  const configService = app.get(ConfigService);
  const grpcConfig = new GrpcConfiguration(configService);
  app.connectMicroservice<MicroserviceOptions>(grpcConfig.getServerOptions());

  await app.startAllMicroservices();

  await app.listen(+configService.get('HTTP_PORT'));
}

bootstrap();
