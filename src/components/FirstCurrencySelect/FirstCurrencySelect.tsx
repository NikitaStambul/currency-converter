import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { setCurrency } from '../../store/slices/currencySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import GuessedCurrency from '../GuessedCurrency/GuessedCurrency';

const FirstCurrencySelect = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  const handleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    dispatch(setCurrency(value));
  };

  return (
    <Box
      mt={8}
      width="100vw"
      display="flex"
      justifyContent="center"
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          padding: 2,
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Select your currency:</Typography>
        <GuessedCurrency />
        <Typography variant="h6">If not, select one:</Typography>
        <CurrencySelect selected={currency} onSelect={handleSelect} />
      </Paper>
    </Box>
  );
};

export default FirstCurrencySelect;
