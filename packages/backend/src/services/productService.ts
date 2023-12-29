import * as productRepository from '../repositories/productRepository';
import { IScraper } from '../scrapers/interfaces/IScraper';
import { ProductData, ScrapedProductData } from '../types';

export const findOrCreateProduct = async (url: string, scraper: IScraper): Promise<ProductData> => {
  let product = await productRepository.findProductByUrl(url);

  if (!product) {
    const scrapedData: ScrapedProductData = await scraper.scrapeProductData(url);
    product = await productRepository.createProduct({ ...scrapedData, url });
  }

  return product as ProductData;
};
