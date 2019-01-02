import Client from 'uber-estimates-client';

import {
  UBER_TOKEN,
} from '../../config';

const getPrices = async ({
  start,
  end,
  seats,
}) => new Client({ serverToken: UBER_TOKEN }).getPrices({ start, end, seats });

const handlePrices = async (request, response) => {
  try {
    const prices = await getPrices({
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
    // TODO: @jaebradley adjust uber-estimates-client to return response object instead of
    // just data so I can populate headers
    response.json(prices);
  } catch (error) {
    if (error.response) {
      response.statusCode = error.response.status;
      response.set(error.response.headers);
      response.json(error.response.data);
    } else if (error.request) {
      response.statusCode = 500;
      response.json({
        message: 'Request was made but no response was received',
      });
    } else {
      response.statusCode = 500;
      response.json({
        message: error.message,
      });
    }
  }
};

export default handlePrices;
