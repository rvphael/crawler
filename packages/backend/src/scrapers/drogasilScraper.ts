import axios from 'axios';
import cheerio from 'cheerio';
import { IScraper } from './interfaces/IScraper';
import { drogasilSelectors } from './selectors/drogasilSelectors';
import { ScrapedProductData } from '../types';

export const drogasilScraper: IScraper = {
  async scrapeProductData(url: string): Promise<ScrapedProductData> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const rawPrice = $(drogasilSelectors.price).text();
      const formattedPrice = rawPrice.replace('R$', '').replace(',', '.');

      const name = $(drogasilSelectors.name).text();
      const barcode = $(drogasilSelectors.barcode).text();
      const brand = $(drogasilSelectors.brand).text();
      const image = $(drogasilSelectors.image).attr('src') || '';
      const price = parseFloat(formattedPrice);

      if (!name || !barcode || !brand || !image || isNaN(price)) {
        throw new Error('Failed to scrape product data. Missing or invalid data.');
      }

      return { name, barcode, brand, image, price };
    } catch (error: any) {
      throw new Error(`Failed to scrape product data: ${error.message}`);
    }
  }
};
