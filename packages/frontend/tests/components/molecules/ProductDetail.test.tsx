import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from '../../../src/components/molecules/ProductDetail';

describe('ProductDetail', () => {
  const mockProps = {
    name: 'Test Product',
    barCode: '123456789',
    brand: 'Test Brand',
    price: '9.99',
    imageUrl: 'http://example.com/image.jpg'
  };

  it('renders the product details', () => {
    render(<ProductDetail {...mockProps} />);

    expect(screen.getByAltText(mockProps.name)).toHaveAttribute('src', mockProps.imageUrl);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();

    expect(screen.getByText(`${mockProps.barCode} - ${mockProps.brand}`)).toBeInTheDocument();

    expect(screen.getByText(`R$ ${mockProps.price}`)).toBeInTheDocument();
  });
});
