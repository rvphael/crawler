import { Request, Response } from 'express';
import * as productService from '../services/productService';
import { getScraper } from '../services/scraperService';

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { url } = req.query as { url: string };
    const scraper = getScraper(url);
    const product = await productService.findOrCreateProduct(url, scraper);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.json(product);
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: "Produto não encontrado no site externo" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
