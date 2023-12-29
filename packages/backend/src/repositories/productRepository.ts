import Product from '../models/productModel';

export const findProductByUrl = async (url: string) => {
  return await Product.findOne({ where: { url } });
};

export const createProduct = async (productData: any) => {
  return await Product.create(productData);
};
