import axios from 'axios';
import { drogasilScraper } from '../../../src/scrapers/drogasilScraper';

jest.mock('axios');

describe('drogasilScraper', () => {
  it('should scrape product data from a given URL', async () => {
    const mockHtml = `
      <html>
        <body>
          <h1 data-qa="seo-product_name-h1validator">Test Product</h1>
          <table>
            <tr><th>EAN</th><td><div>123456789</div></td></tr>
          </table>
          <li class="brand">Test Brand</li>
          <img class="small-img" src="http://example.com/image.jpg" />
          <div data-qa="price_final_item">R$19,99</div>
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
          <div data-qa="price_final_item">Invalid Price</div>
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
