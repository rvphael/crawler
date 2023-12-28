export interface IScraper {
  scrapeProductData(url: string): Promise<any>;
}
