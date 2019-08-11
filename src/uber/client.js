import Client from 'uber-estimates-client';

import {
  UBER_TOKEN,
} from '../config';

const client = new Client({ serverToken: UBER_TOKEN });

export default client;
