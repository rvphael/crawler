import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductNotFoundPage from '../../src/pages/ProductNotFoundPage';

describe('ProductNotFoundPage', () => {
  it('renders the not found message', () => {
    render(
      <Router>
        <ProductNotFoundPage />
      </Router>
    );
    expect(screen.getByText('Produto não encontrado')).toBeInTheDocument();
  });
});
