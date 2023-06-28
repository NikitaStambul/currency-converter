import React from 'react';
import { Stack, styled } from '@mui/material';
import { Typography } from '@mui/material';

const UpperText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.dark,
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 700,
  lineHeight: '120%',
}));

const LowerText = styled(UpperText)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Welcome = () => {
  return (
    <Stack>
      <UpperText mb={2}>Welcome to</UpperText>
      <LowerText>Currency Converter 💰</LowerText>
    </Stack>
  );
};

export default Welcome;
