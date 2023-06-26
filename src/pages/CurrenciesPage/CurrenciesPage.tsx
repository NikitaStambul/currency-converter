import React from 'react';
import ExchangeRatesTable from '../../components/ExchangeRatesTable';
import { Box, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import CurrencySelect from '../../components/CurrencySelect/CurrencySelect';
import { setCurrency } from '../../store/slices/currencySlice';

const CurrenciesPage = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  const handleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    dispatch(setCurrency(value));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack direction="row" alignItems="center" gap={2} mb={2}>
        <Typography variant="h6">Select currency:</Typography>
        <CurrencySelect selected={currency} onSelect={handleSelect} />
      </Stack>
      <ExchangeRatesTable />
    </Box>
  );
};

export default CurrenciesPage;
