import { env } from '@/config/env';

import 'reflect-metadata';
import { app } from './config/app';
import { dbConnection } from './config/db';

dbConnection
  .initialize()
  .then(() =>
    app.listen(env.port, () =>
      console.log(`\n🔝 Server running at http://localhost:${env.port}\n`),
    ),
  )
  .catch(console.error);
