import { Router } from 'express';
import { getProduct } from '../controllers/productController';

export const productRoutes = (router: Router): void => {
  const productRouter = Router();

  productRouter.get('/', getProduct);

  router.use('/product', productRouter);
};
