import { DatabaseModule } from '@app/common/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NOTE_SCHEMA } from './common/schemas/schema';
import { NotesModule } from './modules/notes/notes.module';

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
          schema: NOTE_SCHEMA,
        };
      },
    }),
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
