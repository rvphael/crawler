import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../atoms/Logo';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default Header;
