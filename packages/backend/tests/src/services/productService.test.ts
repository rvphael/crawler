import * as productRepository from '../../../src/repositories/productRepository';
import { findOrCreateProduct } from '../../../src/services/productService';
import { IScraper } from '../../../src/scrapers/interfaces/IScraper';
import { ProductData, ScrapedProductData } from '../../../src/types';

jest.mock('../../../src/repositories/productRepository');

describe('productService', () => {
  const mockUrl = 'http://example.com/product';
  const mockScrapedProduct: ScrapedProductData = {
    name: 'Test Product',
    barcode: '123456789',
    brand: 'Test Brand',
    image: 'http://example.com/image.jpg',
    price: 9.99
  };
  const mockProduct: ProductData = {
    ...mockScrapedProduct,
    id: 1,
    url: mockUrl,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should find existing product', async () => {
    (productRepository.findProductByUrl as jest.Mock).mockResolvedValue(mockProduct);

    const result = await findOrCreateProduct(mockUrl, {} as IScraper);

    expect(result).toEqual(mockProduct);
    expect(productRepository.findProductByUrl).toHaveBeenCalledWith(mockUrl);
    expect(productRepository.createProduct).not.toHaveBeenCalled();
  });

  it('should create new product if not found', async () => {
    (productRepository.findProductByUrl as jest.Mock).mockResolvedValue(null);
    (productRepository.createProduct as jest.Mock).mockResolvedValue(mockProduct);

    const mockScraper: IScraper = {
      scrapeProductData: jest.fn().mockResolvedValue(mockScrapedProduct)
    };

    const result = await findOrCreateProduct(mockUrl, mockScraper);

    expect(result).toEqual(mockProduct);
    expect(mockScraper.scrapeProductData).toHaveBeenCalledWith(mockUrl);
    expect(productRepository.createProduct).toHaveBeenCalledWith({ ...mockScrapedProduct, url: mockUrl });
  });
});
