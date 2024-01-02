import React from 'react';
import { Typography } from '@mui/material';

interface PriceProps {
  value: string;
}

const Price: React.FC<PriceProps> = ({ value }) => (
  <Typography variant="subtitle1" color="white">{value}</Typography>
);

export default Price;
