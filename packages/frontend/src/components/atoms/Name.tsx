import React from 'react';
import { Typography } from '@mui/material';

interface NameProps {
  value: string;
}

const Name: React.FC<NameProps> = ({ value }) => (
  <Typography variant="h5" color="white">{value}</Typography>
);

export default Name;
