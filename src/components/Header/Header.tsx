import React from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import Logo from '../Logo';
import NavLink from '../NavLink/NavLink';

const Header = () => {
  return (
    <Paper>
      <Container maxWidth="tablet">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={60}
          gap={2}
        >
          <Logo />
          <Stack direction="row" height="100%" alignItems="center">
            <NavLink to="/">Currencies</NavLink>
            <NavLink to="/converter">Converter</NavLink>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
};

export default Header;
