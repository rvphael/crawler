import axios from 'axios';
import { fetchProductDetails } from '../../src/utils/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchProductDetails', () => {
  it('should fetch product details successfully', async () => {
    const mockData = {
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 9.99,
    };

    mockedAxios.get.mockResolvedValue({ data: mockData });

    const productUrl = 'http://example.com/product';
    const result = await fetchProductDetails(productUrl);

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:4000/api/product', { params: { url: productUrl } });

    expect(result).toEqual(mockData);
  });

  it('should handle an API error', async () => {
    const errorMessage = 'Network Error';

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    const productUrl = 'http://example.com/product';

    await expect(fetchProductDetails(productUrl)).rejects.toThrow(errorMessage);
  });
});
