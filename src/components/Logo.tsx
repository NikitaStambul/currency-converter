import React from 'react';
import { Stack, Typography, styled } from '@mui/material';
import { ReactComponent as SwapIcon } from '../assets/logo-icon.svg';

const ColoredText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  userSelect: 'none',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const Logo = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <SwapIcon />
      <ColoredText>Currency Converter</ColoredText>
    </Stack>
  );
};

export default Logo;
