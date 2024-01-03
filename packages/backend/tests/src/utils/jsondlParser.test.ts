import { extractJsonLdData } from '../../../src/utils/jsonLdParser';

describe('jsondlParser', () => {
  it('should extract JSON-LD data correctly', () => {
    const mockHtml = `
      <html>
      <head>
        <script type="application/ld+json">
          {
            "@type": "Product",
            "name": "Test Product",
            "gtin13": "1234567890123",
            "brand": { "name": "Test Brand" },
            "image": "http://example.com/image.jpg",
            "offers": { "price": "19.99" }
          }
        </script>
      </head>
      <body></body>
      </html>
    `;

    const result = extractJsonLdData(mockHtml);

    expect(result).toEqual({
      '@type': 'Product',
      name: 'Test Product',
      gtin13: '1234567890123',
      brand: { name: 'Test Brand' },
      image: 'http://example.com/image.jpg',
      offers: { price: '19.99' }
    });
  });

  it('should return null if JSON-LD data is not found', () => {
    const mockHtml = `<html><head></head><body></body></html>`;
    const result = extractJsonLdData(mockHtml);
    expect(result).toBeNull();
  });
});
