import {
  Router,
} from 'express';

import handlePrices from '../../requests/uber/handlePrices';

const router = Router();

router.get('/', handlePrices);

export default router;
