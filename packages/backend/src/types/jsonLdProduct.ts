export interface JsonLdProduct {
  '@type': string;
  name: string;
  gtin13?: string;
  brand?: {
    name: string;
  };
  image: string;
  offers?: {
    price: string;
    priceCurrency?: string;
  };
}
