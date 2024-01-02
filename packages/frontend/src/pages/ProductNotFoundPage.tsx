import React from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Logo from '../components/atoms/Logo';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ProductNotFoundPage: React.FC = () => {
  const location = useLocation();
  const error = location.state?.error || 'Produto não encontrado';

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="black">
      <Header />
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Logo />
        <Box
          mt={2}
          width="60%"
          border="1px solid white"
          p={2}
          mb={2}
        >
          <Typography variant="h5" color="white" textAlign="center">
            {error}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductNotFoundPage;
