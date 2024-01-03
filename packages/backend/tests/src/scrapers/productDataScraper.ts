import axios from 'axios';
import { scrapeProductData } from '../../../src/scrapers/productDataScraper';
import { extractJsonLdData } from '../../../src/utils/jsonLdParser';

jest.mock('axios');
jest.mock('../../../src/utils/jsonLdParser');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('scrapeProductData', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should scrape product data from a given URL', async () => {
    const mockJsonLd = {
      "@type": "Product",
      "name": "Test Product",
      "image": "http://example.com/image.jpg",
      "gtin13": "123456789",
      "brand": { "name": "Test Brand" },
      "offers": { "price": "19.99" }
    };

    mockedAxios.get.mockResolvedValue({ data: `<script type="application/ld+json">${JSON.stringify(mockJsonLd)}</script>` });
    (extractJsonLdData as jest.Mock).mockReturnValue(mockJsonLd);

    const url = 'http://example.com/product';
    const productData = await scrapeProductData(url);

    expect(mockedAxios.get).toHaveBeenCalledWith(url);
    expect(productData).toEqual({
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 19.99,
    });
  });

  it('should handle errors during scraping', async () => {
    (extractJsonLdData as jest.Mock).mockReturnValue(null);
    mockedAxios.get.mockResolvedValue({ data: 'mock response' });

    const url = 'http://example.com/product';

    await expect(scrapeProductData(url)).rejects.toThrow('Failed to extract JSON-LD data.');
  });

  it('should handle missing or invalid data', async () => {
    const mockJsonLd = { "@type": "Product" };
    mockedAxios.get.mockResolvedValue({ data: `<script type="application/ld+json">${JSON.stringify(mockJsonLd)}</script>` });
    (extractJsonLdData as jest.Mock).mockReturnValue(mockJsonLd);

    const url = 'http://example.com/product';

    await expect(scrapeProductData(url)).rejects.toThrow('Produto não encontrado');
  });
});
