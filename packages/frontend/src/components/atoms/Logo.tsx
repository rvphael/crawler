import React from 'react';
import { Box } from '@mui/material';

const Logo: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="fit-content"
    padding="8px"
    bgcolor="white"
    borderRadius="4px"
    boxShadow="0 2px 4px rgba(0,0,0,0.2)"
  >
    <img
      src="https://pill.com.br/cdn/shop/t/51/assets/header-union.svg?v=4551551774730843711689454729"
      alt="Logo Pill"
      style={{ height: '40px' }}
    />
  </Box>
);

export default Logo;
