import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const {
  PORT,
  UBER_TOKEN,
} = process.env;

export {
  PORT,
  UBER_TOKEN,
};
