import { DB_CONNECTION } from '@app/common/database/database.module-definition';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { NOTE_SCHEMA } from '../../common/schemas/schema';

@Injectable()
export class NotesService {
  constructor(
    @Inject(DB_CONNECTION) private db: NodePgDatabase<typeof NOTE_SCHEMA>,
  ) {}

  async create() {
    return this.db
      .insert(NOTE_SCHEMA.notes)
      .values({
        title: 'Note 1',
        content: 'Content 1',
        userId: '1',
      })
      .returning();
  }
}
