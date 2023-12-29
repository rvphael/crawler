import Product from '../../../src/models/productModel';
import { createProduct, findProductByUrl } from '../../../src/repositories/productRepository';
import { ProductCreationAttributes, ProductData } from '../../../src/types';

jest.mock('../../../src/models/productModel');

describe('productRepository', () => {
  it('findProductByUrl should find a product by URL', async () => {
    const mockProductData: ProductData = {
      id: 1,
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 9.99,
      url: 'http://example.com/product',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    Product.findOne = jest.fn().mockResolvedValue({
      get: jest.fn().mockReturnValue(mockProductData)
    });

    const result = await findProductByUrl('http://example.com/product');

    expect(Product.findOne).toHaveBeenCalledWith({ where: { url: 'http://example.com/product' } });
    expect(result).toEqual(mockProductData);
  });

  it('createProduct should create a new product', async () => {
    const mockProductCreationAttributes: ProductCreationAttributes = {
      name: 'New Product',
      barcode: '987654321',
      brand: 'New Brand',
      image: 'http://example.com/image.jpg',
      price: 19.99,
      url: 'http://example.com/new-product'
    };
    const mockProductData: ProductData = {
      id: 1,
      ...mockProductCreationAttributes,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    Product.create = jest.fn().mockResolvedValue({
      get: jest.fn().mockReturnValue(mockProductData)
    });

    const result = await createProduct(mockProductCreationAttributes);

    expect(Product.create).toHaveBeenCalledWith(mockProductCreationAttributes);
    expect(result).toEqual(mockProductData);
  });
});
