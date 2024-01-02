import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductPage from '../../src/pages/ProductPage';
import { fetchProductDetails } from '../../src/utils/api';

jest.mock('../../src/utils/api', () => ({
  ...jest.requireActual('../../src/utils/api'),
  fetchProductDetails: jest.fn(),
}));

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
  useLocation: () => ({
    search: '?url=test-product-url'
  }),
}));

describe('ProductPage', () => {
  let originalConsoleError: typeof console.error;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('displays product details on successful fetch', async () => {
    const mockProduct = {
      name: 'Test Product',
      barcode: '123456789',
      brand: 'Test Brand',
      image: 'http://example.com/image.jpg',
      price: 9.99,
    };

    (fetchProductDetails as jest.Mock).mockResolvedValue(mockProduct);

    render(
      <Router>
        <ProductPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(new RegExp(mockProduct.name, 'i'))).toBeInTheDocument();
    });

    expect(screen.getByText(new RegExp(mockProduct.barcode, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockProduct.brand, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockProduct.price.toString(), 'i'))).toBeInTheDocument();
  });

  it('should navigate to error page on fetch failure', async () => {
    const errorMessage = 'Network Error';
    (fetchProductDetails as jest.Mock).mockRejectedValue(new Error(errorMessage));

    render(
      <Router>
        <ProductPage />
      </Router>
    );

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('/product-not-found', expect.anything());
    });
  });
});
