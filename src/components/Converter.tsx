import { Grid, IconButton } from '@mui/material';
import React from 'react';
import ConverterCard from './ConverterCard';
import { ReactComponent as Swap } from '../assets/swap.svg';
import { useAppDispatch } from '../store/hooks';
import { swapCurrencies } from '../store/slices/currencySlice';
import { swapAmount } from '../store/slices/amountSlice';

const Converter = () => {
  const dispatch = useAppDispatch();

  const handleSwapClick = () => {
    dispatch(swapCurrencies());
    dispatch(swapAmount());
  };

  return (
    <Grid container spacing={2} position="static">
      <Grid item mobile={12} tablet={6}>
        <ConverterCard isFrom />
      </Grid>
      <IconButton
        onClick={handleSwapClick}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Swap />
      </IconButton>
      <Grid item mobile={12} tablet={6}>
        <ConverterCard />
      </Grid>
    </Grid>
  );
};

export default Converter;
