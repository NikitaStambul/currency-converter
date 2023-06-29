import React from 'react';
import { Stack, Typography } from '@mui/material';

const Credits = () => {
  return (
    <Stack spacing="10px">
      <Typography variant="footer-info" color="text.secondary">
        © 2023 Currency Converter Inc.
      </Typography>
      <Typography variant="footer-info" color="primary.main">
        Dev by Mykyta Stambul / Design by Igor Kochmak
      </Typography>
    </Stack>
  );
};

export default Credits;
