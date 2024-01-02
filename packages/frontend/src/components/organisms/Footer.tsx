import React from 'react';
import { Box } from '@mui/material';
import Logo from '../atoms/Logo';

const Footer: React.FC = () => (
  <Box bgcolor="black" border="1px solid white" padding="1rem" margin="2rem">
    <Box display="flex" justifyContent="flex-end">
      <Logo />
    </Box>
  </Box>
);

export default Footer;
