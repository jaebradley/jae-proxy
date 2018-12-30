import {
  Router,
} from 'express';

import prices from './prices';

const router = Router();

router.use('/prices', prices);

export default router;
