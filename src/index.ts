import cors from 'cors';
import express, { json } from 'express';

import { env } from '@/config/env';

import { routes } from '@/routes';

import 'reflect-metadata';
import { dbConnection } from './config/db';

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

dbConnection
  .initialize()
  .then(() =>
    app.listen(env.port, () =>
      console.log(`\n🔝 Server running at http://localhost:${env.port}\n`),
    ),
  )
  .catch(console.error);
