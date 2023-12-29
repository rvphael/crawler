import { ScrapedProductData } from './scrapedProductData';

export interface ProductAttributes extends ScrapedProductData {
  url: string;
}

export interface ProductData extends ProductAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCreationAttributes = Omit<ProductAttributes, 'id' | 'createdAt' | 'updatedAt'>;
