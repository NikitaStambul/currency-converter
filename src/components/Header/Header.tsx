import React from 'react';
import { Box } from '@mui/material';
import NavLink from '../NavLink';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#90a4ae"
      height={60}
    >
      <NavLink to="/">Currencies</NavLink>
      <NavLink to="/converter">Converter</NavLink>
    </Box>
  );
};

export default Header;
