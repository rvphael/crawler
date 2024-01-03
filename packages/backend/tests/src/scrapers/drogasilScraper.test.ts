import axios from 'axios';
import { drogasilScraper } from '../../../src/scrapers/drogasilScraper';

jest.mock('axios');

const mockedAxiosGet = axios.get as jest.Mock;

describe('drogasilScraper', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should scrape product data from a given URL', async () => {
    const mockJsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Test Product",
      "image": "http://example.com/image.jpg",
      "gtin13": "123456789",
      "brand": {
        "@type": "Brand",
        "name": "Test Brand"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BRL",
        "price": "19.99"
      }
    };

    const mockHtml = `
      <html>
        <body>
          <script type="application/ld+json">
            ${JSON.stringify(mockJsonLd)}
          </script>
        </body>
      </html>
    `;

    (axios.get as jest.Mock).mockResolvedValue({ data: mockHtml });

    const url = 'http://example.com/product';
    const productData = await drogasilScraper.scrapeProductData(url);

    expect(productData).toEqual({
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 19.99,
    });
  });

  it('should handle errors during scraping', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Network error'));

    const url = 'http://example.com/product';

    await expect(drogasilScraper.scrapeProductData(url)).rejects.toThrow(
      'Failed to scrape product data: Network error'
    );
  });

  it('should handle missing or invalid data', async () => {
    const mockHtml = `
      <html>
        <body>
          <script type="application/ld+json">
            {
              "@context": "https://schema.org/",
              "@type": "Product"
            }
          </script>
        </body>
      </html>
    `;

    (axios.get as jest.Mock).mockResolvedValue({ data: mockHtml });

    const url = 'http://example.com/product';

    await expect(drogasilScraper.scrapeProductData(url)).rejects.toThrow(
      'Failed to scrape product data. Missing or invalid data.'
    );
  });
});
