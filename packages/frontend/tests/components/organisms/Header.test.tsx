import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/organisms/Header';

describe('Header', () => {
  it('renders the header with the logo', () => {
    render(<Header />);
    expect(screen.getByAltText('Logo Pill')).toBeInTheDocument();
  });
});
