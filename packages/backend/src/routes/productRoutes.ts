import { Router } from 'express';
import { getProduct } from '../controllers/productController';

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Retorna os detalhes do produto
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL do produto
 *     responses:
 *       200:
 *         description: Detalhes do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 barcode:
 *                   type: string
 *                 brand:
 *                   type: string
 *                 image:
 *                   type: string
 *                 price:
 *                   type: number
 *       404:
 *         description: Produto não encontrado
 */
export const productRoutes = (router: Router): void => {
  const productRouter = Router();

  productRouter.get('/', getProduct);

  router.use('/product', productRouter);
};
