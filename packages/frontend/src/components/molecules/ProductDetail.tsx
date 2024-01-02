import React from 'react';
import { Grid, Paper } from '@mui/material';
import Name from '../atoms/Name';
import BarcodeAndBrand from '../atoms/BarcodeAndBrand';
import Price from '../atoms/Price';
import Image from '../atoms/Image';

interface ProductDetailProps {
  name: string;
  barCode: string;
  brand: string;
  price: string;
  imageUrl: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ name, barCode, brand, price, imageUrl }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Image src={imageUrl} alt={name} />
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper style={{ border: '1px solid white', padding: '8px', backgroundColor: 'black', borderRadius: 0 }}>
        <Name value={name} />
      </Paper>
      <Paper style={{ border: '1px solid white', padding: '8px', backgroundColor: 'black', borderRadius: 0, marginTop: '8px' }}>
        <BarcodeAndBrand barcode={barCode} brand={brand} />
      </Paper>
      <Paper style={{ border: '1px solid white', padding: '8px', backgroundColor: 'black', borderRadius: 0, marginTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
        <Price value={`R$ ${price}`} />
      </Paper>
    </Grid>
  </Grid>
);

export default ProductDetail;
