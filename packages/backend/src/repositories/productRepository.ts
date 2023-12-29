import Product from '../models/productModel';
import { ProductData, ProductCreationAttributes } from '../types';

export const findProductByUrl = async (url: string): Promise<ProductData | null> => {
  const product = await Product.findOne({ where: { url } });
  return product ? product.get({ plain: true }) as ProductData : null;
};

export const createProduct = async (productData: ProductCreationAttributes): Promise<ProductData> => {
  const product = await Product.create(productData);
  return product.get({ plain: true }) as ProductData;
};
