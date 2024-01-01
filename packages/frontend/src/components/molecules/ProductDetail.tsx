import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface ProductDetailProps {
  name: string;
  barCode: string;
  brand: string;
  price: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ name, barCode, brand, price }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h5">{name}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1">{barCode} - {brand}</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6">{price}</Typography>
    </Grid>
  </Grid>
);

export default ProductDetail;
