import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { USER_SCHEMA } from './common/schemas/schema';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          user: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          schema: USER_SCHEMA,
        };
      },
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
