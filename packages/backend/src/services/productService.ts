import Product from '../models/productModel';
import { IScraper } from '../scrapers/interfaces/IScraper';

export const findOrCreateProduct = async (url: string, scraper: IScraper) => {
  let product = await Product.findOne({ where: { url } });

  if (!product) {
    const scrapedData = await scraper.scrapeProductData(url);
    product = await Product.create({ ...scrapedData, url });
  }

  return product;
};
