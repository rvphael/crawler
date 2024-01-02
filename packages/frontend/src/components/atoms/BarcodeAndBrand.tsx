import React from 'react';
import { Typography } from '@mui/material';

interface BarcodeAndBrandProps {
  barcode: string;
  brand: string;
}

const BarcodeAndBrand: React.FC<BarcodeAndBrandProps> = ({ barcode, brand }) => (
  <Typography variant="body1" color="white">{barcode} - {brand}</Typography>
);

export default BarcodeAndBrand;
