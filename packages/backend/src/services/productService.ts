import * as productRepository from '../repositories/productRepository';
import { IScraper } from '../scrapers/interfaces/IScraper';

export const findOrCreateProduct = async (url: string, scraper: IScraper) => {
  let product = await productRepository.findProductByUrl(url);

  if (!product) {
    const scrapedData = await scraper.scrapeProductData(url);
    product = await productRepository.createProduct({ ...scrapedData, url });
  }

  return product;
};
