import cors from 'cors';
import express, { json } from 'express';

import 'reflect-metadata';
import { setupRoutes } from './setupRoutes';

const app = express();

app.use(cors());
app.use(json());

setupRoutes(app);

export { app };
