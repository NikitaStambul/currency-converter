import React from 'react';
import { Box, Container, IconButton, Stack } from '@mui/material';
import Logo from './Logo';
import NavLink from './NavLink';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';

const Header = () => {
  return (
    <Box boxShadow={1}>
      <Container maxWidth="tablet">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={60}
          gap={2}
        >
          <Logo />
          <Stack
            direction="row"
            height="100%"
            alignItems="center"
            display={{ mobile: 'none', tablet: 'flex' }}
          >
            <NavLink to="/">Currencies</NavLink>
            <NavLink to="/converter">Converter</NavLink>
          </Stack>
          <IconButton sx={{ display: { mobile: 'flex', tablet: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
