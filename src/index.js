import express from 'express';

import {
  PORT,
} from './config';

import uber from './routes/uber';

const app = express();

app.use('/uber', uber);

app.listen(PORT);
