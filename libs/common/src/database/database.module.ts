import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DatabaseOptions } from './database-options';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
  DB_CONNECTION,
} from './database.module-definition';

@Global()
@Module({
  exports: [DB_CONNECTION],
  providers: [
    {
      provide: DB_CONNECTION,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const pool = new Pool({
          host: databaseOptions.host,
          port: databaseOptions.port,
          user: databaseOptions.user,
          password: databaseOptions.password,
          database: databaseOptions.database,
        });

        return drizzle(pool, { schema: databaseOptions.schema });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
