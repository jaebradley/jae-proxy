import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import {
  PORT,
} from './config';
import uber from './routes/uber';
import logger from './logger';
import errorHandler from './errors/handler';

const app = express();

// Set up logger
app.use(morgan('combined', { stream: logger.stream }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set up global error handler
app.use(errorHandler);

app.use('/uber', uber);

app.listen(PORT, () => logger.info(`Started server on port: ${PORT}`));
