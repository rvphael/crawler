import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../src/components/organisms/Footer';

describe('Footer', () => {
  it('renders the footer with the logo', () => {
    render(<Footer />);
    expect(screen.getByAltText('Logo Pill')).toBeInTheDocument();
  });
});
