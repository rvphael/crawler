import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ProductDetail from '../components/molecules/ProductDetail';
import { fetchProductDetails } from '../utils/api';
import { Product } from '../types/Product';
import { Box, Typography } from '@mui/material';

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const productUrl = queryParams.get('url');
    if (productUrl) {
      fetchProductDetails(productUrl)
        .then(data => {
          if (data) {
            setProduct(data);
          } else {
            setError("Produto não encontrado");
            navigate('/product-not-found', { state: { error: "Produto não encontrado" } });
          }
        })
        .catch(err => {
          console.error('Failed to fetch product details:', err);
          setError(err.message || "Erro ao buscar detalhes do produto");
          navigate('/product-not-found', { state: { error: err.message || "Erro ao buscar detalhes do produto" } });
        });
    }
  }, [search, navigate]);

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!product) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="black">
      <Header />
      <Box flex={1} display="flex" justifyContent="center" alignItems="center" padding="2rem">
        <ProductDetail
          name={product.name}
          barCode={product.barcode}
          brand={product.brand}
          price={product.price.toString()}
          imageUrl={product.image}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductPage;
