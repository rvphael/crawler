import { Request, Response } from 'express';
import { getProduct } from '../../../src/controllers/productController';
import { findOrCreateProduct } from '../../../src/services/productService';
import { getScraper } from '../../../src/services/scraperService';

jest.mock('../../../src/services/productService');
jest.mock('../../../src/services/scraperService');

describe('getProduct', () => {
  const req: Partial<Request> = { query: { url: 'https://www.example.com/product' } };
  const res: Partial<Response> = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get product data successfully', async () => {
    const mockedScraperData = {
      name: 'Product Name',
      barcode: '1234567890',
      brand: 'Brand',
      image: 'https://example.com/image.jpg',
      price: 10.99,
    };

    (getScraper as jest.Mock).mockReturnValue(mockedScraperData);

    (findOrCreateProduct as jest.Mock).mockResolvedValue(mockedScraperData);

    await getProduct(req as Request, res as Response);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockedScraperData);
  });

  it('should handle errors gracefully', async () => {
    const errorMessage = 'An error occurred';

    (findOrCreateProduct as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getProduct(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });

  it('should return 404 if product not found', async () => {
    (getScraper as jest.Mock).mockReturnValue({ scrapeProductData: jest.fn() });
    (findOrCreateProduct as jest.Mock).mockResolvedValue(null);

    await getProduct(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Produto não encontrado' });
  });

  it('should return 404 for external site errors', async () => {
    const externalError: any = new Error('Produto não encontrado no site externo');
    externalError.response = { status: 404 };

    (getScraper as jest.Mock).mockReturnValue({ scrapeProductData: jest.fn() });
    (findOrCreateProduct as jest.Mock).mockRejectedValue(externalError);

    await getProduct(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Produto não encontrado no site externo' });
  });
});
