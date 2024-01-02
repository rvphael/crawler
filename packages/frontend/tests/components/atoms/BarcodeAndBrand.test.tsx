import React from 'react';
import { render, screen } from '@testing-library/react';
import BarcodeAndBrand from '../../../src/components/atoms/BarcodeAndBrand';

describe('BarcodeAndBrand', () => {
  it('renders barcode and brand', () => {
    render(<BarcodeAndBrand barcode="123456" brand="Test Brand" />);
    expect(screen.getByText('123456 - Test Brand')).toBeInTheDocument();
  });
});
