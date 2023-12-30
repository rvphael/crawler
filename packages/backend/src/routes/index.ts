import { Router } from 'express';
import { productRoutes } from './productRoutes';

const router = Router();

productRoutes(router);

router.use('/api', router);

export default router;
