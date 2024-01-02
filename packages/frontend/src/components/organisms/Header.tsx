import React from 'react';
import { Box } from '@mui/material';
import Logo from '../atoms/Logo';

const Header: React.FC = () => (
  <Box bgcolor="black" border="1px solid white" padding="1rem" margin="2rem">
    <Logo />
  </Box>
);

export default Header;
