import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DatabaseOptions } from './database-options';

export const DB_CONNECTION = 'DB_CONNECTION';

export const {
  ConfigurableModuleClass: ConfigurableDatabaseModule,
  MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<DatabaseOptions>()
  .setClassMethodName('forRoot')
  .build();
