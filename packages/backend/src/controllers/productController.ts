import { Request, Response } from 'express';
import * as productService from '../services/productService';
import { getScraper } from '../services/scraperService';

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { url } = req.query as { url: string };
    const scraper = getScraper(url);
    const product = await productService.findOrCreateProduct(url, scraper);
    res.json(product);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
