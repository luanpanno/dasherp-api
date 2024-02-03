import { DataSource } from 'typeorm';

import { PgUser } from '@/domain/entities/user';

import { env } from './env';

export const dbConnection = new DataSource({
  type: 'postgres',
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.password,
  database: env.db.name,
  entities: [PgUser],
  synchronize: true,
  logging: false,
});
