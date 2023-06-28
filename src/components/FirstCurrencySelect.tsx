import { Box, Container } from '@mui/material';
import React from 'react';
import Welcome from './Welcome';
import WelcomeBanner from './WelcomeBanner';

const FirstCurrencySelect = () => {
  return (
    <Container maxWidth="tablet">
      <Box
        mt={8}
        gap={5}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Welcome />
        <WelcomeBanner />
      </Box>
    </Container>
  );
};

export default FirstCurrencySelect;
