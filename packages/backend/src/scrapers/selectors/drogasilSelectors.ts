export const drogasilSelectors = {
  name: 'h1[data-qa="seo-product_name-h1validator"]',
  barcode: 'tr th:contains("EAN") + td > div',
  brand: 'li.brand',
  image: 'img.small-img',
  price: 'div[data-qa="price_final_item"]',
};
