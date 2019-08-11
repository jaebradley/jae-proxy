import logger from '../logger';

export default function handler(error, request, response, _) {
  logger.debug('Global Error Handler', error, request);
  response.status(500);
  response.json({ message: 'Unexpected error occurred' });
}
