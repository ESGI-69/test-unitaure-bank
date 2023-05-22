import { PrismaClient } from '@prisma/client';
import express from 'express';

import info from './endpoints/info.js';

const prisma = new PrismaClient()

const app = express();

app.get('/users/:id/accounts', info);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
