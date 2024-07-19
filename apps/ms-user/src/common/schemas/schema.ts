import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username'),
  password: text('password'),
});

export const USER_SCHEMA = {
  users,
};
