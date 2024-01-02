import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../src/components/atoms/Image';

describe('Image', () => {
  it('renders image with correct src and alt text', () => {
    render(<Image src="test.png" alt="Test Image" />);
    expect(screen.getByAltText('Test Image')).toHaveAttribute('src', 'test.png');
  });
});
