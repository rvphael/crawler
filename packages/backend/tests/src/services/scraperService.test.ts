import { getScraper } from '../../../src/services/scraperService';
import { drogasilScraper } from '../../../src/scrapers/drogasilScraper';

jest.mock('../../../src/scrapers/drogasilScraper');

describe('scraperService', () => {
  it('should return drogasilScraper for drogasil URL', () => {
    const scraper = getScraper('https://www.drogasil.com.br/some-product');
    expect(scraper).toBe(drogasilScraper);
  });

  it('should throw error for unknown URL', () => {
    expect(() => {
      getScraper('https://www.unknown.com/some-product');
    }).toThrow('Scraper apropriado não encontrado.');
  });
});
