import { Router } from 'express';
import { productRoutes } from './productRoutes';

const router = Router();

productRoutes(router);

export default router;
