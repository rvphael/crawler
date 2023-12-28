import axios from 'axios';
import cheerio from 'cheerio';
import { IScraper } from './interfaces/IScraper';
import { drogasilSelectors } from './selectors/drogasilSelectors';

export const drogasilScraper: IScraper = {
  async scrapeProductData(url: string) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const rawPrice = $(drogasilSelectors.price).text();
    const formattedPrice = rawPrice.replace('R$', '').replace(',', '.');

    const name = $(drogasilSelectors.name).text();
    const barcode = $(drogasilSelectors.barcode).text();
    const brand = $(drogasilSelectors.brand).text();
    const image = $(drogasilSelectors.image).attr('src');
    const price = parseFloat(formattedPrice);

    return { name, barcode, brand, image, price };
  }
};
