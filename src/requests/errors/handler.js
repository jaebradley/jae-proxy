import logger from '../../logger';

export default function handler({ error, response }) {
  if (error) {
    if (error.response) {
      response.status(error.response.status || 500);
      response.set(error.response.headers);
      response.json(error.response.data);
      return null;
    } if (error.request) {
      response.status(500);
      response.json({
        message: 'Request was made but no response was received',
      });
      return null;
    }
  }

  logger.debug('Unexpected error when executing request', error);
  response.status(500);
  response.json({
    message: 'Unexpected error',
  });
  return null;
}
