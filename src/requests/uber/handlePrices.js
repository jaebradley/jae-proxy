import client from '../../uber/client';
import handler from '../errors/handler';

const handlePrices = async (request, response) => {
  try {
    const prices = await client.getPrices({
      start: {
        latitude: request.query.startLatitude,
        longitude: request.query.startLongitude,
      },
      end: {
        latitude: request.query.endLatitude,
        longitude: request.query.endLongitude,
      },
      seats: request.query.seats,
    });

    response.status(200);
    response.json(prices);
  } catch (error) {
    handler({ error, response });
  }
};

export default handlePrices;
