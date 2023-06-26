import React from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import NavLink from '../NavLink';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <Paper>
      <Container maxWidth='sm'>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={60}
          gap={2}
        >
          <Logo />
          <Stack direction="row" height="100%">
            <NavLink to="/">Currencies</NavLink>
            <NavLink to="/converter">Converter</NavLink>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
};

export default Header;
