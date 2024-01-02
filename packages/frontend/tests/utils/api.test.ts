import * as api from '../../src/utils/api';

const mockedFetchProductDetails = api.fetchProductDetails as jest.Mock;

describe('fetchProductDetails', () => {
  it('fetches product details successfully', async () => {
    const mockData = {
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 9.99
    };

    mockedFetchProductDetails.mockResolvedValueOnce(mockData);
    const result = await api.fetchProductDetails('http://example.com/product');
    expect(result).toEqual(mockData);
    expect(mockedFetchProductDetails).toHaveBeenCalledWith('http://example.com/product');
  });

  it('handles API error', async () => {
    const errorMessage = 'Network Error';
    mockedFetchProductDetails.mockRejectedValueOnce(new Error(errorMessage));

    await expect(api.fetchProductDetails('http://example.com/product')).rejects.toThrow(errorMessage);
    expect(mockedFetchProductDetails).toHaveBeenCalledWith('http://example.com/product');
  });
});
