import cheerio from 'cheerio';
import { JsonLdProduct } from '../types';

export const extractJsonLdData = (data: string): JsonLdProduct | null => {
  const $ = cheerio.load(data);
  let jsonData: JsonLdProduct | null = null;

  $('script[type="application/ld+json"]').each((i, el) => {
    try {
      const scriptContent = $(el).html();
      if (scriptContent) {
        const parsedData: JsonLdProduct = JSON.parse(scriptContent);
        if (parsedData['@type'] === 'Product') {
          jsonData = parsedData;
          return false;
        }
      }
    } catch (error) {
      console.error("Erro ao analisar JSON-LD:", error);
    }
  });

  return jsonData;
}
