import { IScraper } from './interfaces/IScraper';
import { scrapeProductData } from './productDataScraper';

export const drogasilScraper: IScraper = {
  async scrapeProductData(url: string) {
    return scrapeProductData(url);
  },
};
