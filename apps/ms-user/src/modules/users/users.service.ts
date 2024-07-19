import { DB_CONNECTION } from '@app/common/database/database.module-definition';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { USER_SCHEMA } from '../../common/schemas/schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB_CONNECTION) private db: NodePgDatabase<typeof USER_SCHEMA>,
  ) {}

  create() {
    return this.db
      .insert(USER_SCHEMA.users)
      .values({
        username: 'tester',
        password: 'okok1234',
      })
      .returning();
  }

  async findOne(id: number) {
    const [user] = await this.db
      .select()
      .from(USER_SCHEMA.users)
      .where(eq(USER_SCHEMA.users.id, id))
      .execute();

    return user;
  }
}
