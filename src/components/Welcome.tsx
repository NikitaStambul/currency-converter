import React from 'react';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

const Welcome = () => {
  return (
    <Stack gap={2}>
      <Typography variant='headline'>Welcome to</Typography>
      <Typography variant='headline' color='primary.main'>Currency Converter 💰</Typography>
    </Stack>
  );
};

export default Welcome;
