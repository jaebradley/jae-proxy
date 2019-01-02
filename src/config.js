import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  UBER_TOKEN,
} = process.env;

export {
  PORT,
  UBER_TOKEN,
};
