import React from 'react';
import { render, screen } from '@testing-library/react';
import Name from '../../../src/components/atoms/Name';

describe('Name', () => {
  it('renders name', () => {
    render(<Name value="Test Name" />);
    expect(screen.getByText('Test Name')).toBeInTheDocument();
  });
});
