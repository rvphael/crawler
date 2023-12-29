import { ScrapedProductData } from '../../types';

export interface IScraper {
  scrapeProductData(url: string): Promise<ScrapedProductData>;
}
