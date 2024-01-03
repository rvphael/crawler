import axios from 'axios';
import { ScrapedProductData } from '../types';
import { extractJsonLdData } from '../utils/jsonLdParser';

export const scrapeProductData = async (url: string): Promise<ScrapedProductData> => {
  try {
    const { data } = await axios.get(url);
    const jsonData = extractJsonLdData(data);

    if (!jsonData) {
      throw new Error('Failed to extract JSON-LD data.');
    }

    const name = jsonData.name;
    const barcode = jsonData.gtin13;
    const brand = jsonData.brand?.name;
    const image = jsonData.image;
    const price = jsonData.offers?.price ? parseFloat(jsonData.offers.price) : null;

    if (!name || !barcode || !brand || !image || !price) {
      throw new Error('Produto não encontrado');
    }

    return { name, barcode, brand, image, price };
  } catch (error: any) {
    throw new Error('Produto não encontrado');
  }
}
