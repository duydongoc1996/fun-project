import { ConfigService } from '@nestjs/config';
import { defineConfig } from 'drizzle-kit';
import path from 'path';

const configService = new ConfigService();

export default defineConfig({
  schema: path.join(__dirname, '../src/common/schemas/schema.ts'),
  out: path.join(__dirname, './drizzle'),
  dialect: 'postgresql',
  dbCredentials: {
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    user: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    ssl: false,
  },
});
