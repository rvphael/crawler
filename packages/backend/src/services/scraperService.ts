import { drogasilScraper } from '../scrapers/drogasilScraper';
import { IScraper } from '../scrapers/interfaces/IScraper';

export const getScraper = (url: string): IScraper => {
  if (url.includes('drogasil')) {
    return drogasilScraper;
  }

  throw new Error('Scraper apropriado não encontrado.');
};
