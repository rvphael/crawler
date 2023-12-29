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
});
