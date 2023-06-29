import React from 'react';
import { Container, Stack } from '@mui/material';
import Credits from './Credits';

const Footer = () => {
  return (
    <Stack boxShadow={1} padding={2} height={80} justifyContent="center">
      <Container maxWidth="tablet">
        <Credits />
      </Container>
    </Stack>
  );
};

export default Footer;
