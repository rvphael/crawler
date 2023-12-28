import { Router } from 'express';

const productRouter = Router();

productRouter.get('/', (req, res) => {
  res.send('Product Route');
});

export const productRoutes = (router: Router) => {
  router.use('/product', productRouter);
};
