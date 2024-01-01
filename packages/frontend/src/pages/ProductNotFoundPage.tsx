import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { Typography } from '@mui/material';

const ProductNotFoundPage: React.FC = () => (
  <div>
    <Header />
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h5">Produto não encontrado</Typography>
    </main>
    <Footer />
  </div>
);

export default ProductNotFoundPage;
