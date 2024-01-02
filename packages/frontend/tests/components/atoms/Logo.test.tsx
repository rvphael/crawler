import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../../../src/components/atoms/Logo';

describe('Logo', () => {
  it('renders the logo', () => {
    render(<Logo />);
    expect(screen.getByAltText('Logo Pill')).toBeInTheDocument();
  });
});
