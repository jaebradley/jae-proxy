import express from 'express';

import {
  PORT,
} from './config';

const app = express();

app.get('/', (request, response) => response.send('j fucking k'));

app.listen(PORT, () => console.log('fucking listening'));
