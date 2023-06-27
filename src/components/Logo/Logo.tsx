import React from 'react';
import { Stack, Typography, styled } from '@mui/material';
import { ReactComponent as SwapIcon } from '../../assets/arrow-swap-horizontal.svg';

const ColoredText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  userSelect: 'none',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const ColoredIcon = styled(SwapIcon)(({ theme }) => ({
  stroke: theme.palette.primary.main,
  width: 20,
  height: 20,
  transform: 'rotate(-45deg)',
}));

const Logo = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <ColoredIcon />
      <ColoredText>Currency Converter</ColoredText>
    </Stack>
  );
};

export default Logo;
