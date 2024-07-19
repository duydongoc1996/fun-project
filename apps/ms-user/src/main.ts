import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { gRPCServerOptions } from './config/grpc.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: gRPCServerOptions,
  });

  await app.listen(3000);
}

bootstrap();
