import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: text('content'),
  userId: text('userId'),
});

export const NOTE_SCHEMA = {
  notes,
};
