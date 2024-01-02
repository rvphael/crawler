import React from 'react';
import { render,screen } from '@testing-library/react';
import Price from '../../../src/components/atoms/Price';

describe('Price', () => {
  it('renders price', () => {
    render(<Price value="123456" />);
    expect(screen.getByText('123456')).toBeInTheDocument();
  });
});
