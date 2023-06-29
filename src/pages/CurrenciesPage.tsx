import React from 'react';
import ExchangeRatesTable from '../components/ExchangeRatesTable';
import { Box, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import CurrencySelect from '../components/CurrencySelect';
import MultipleCurrenciesSelect from '../components/MultipleCurrenciesSelect';
import { setSelectedCurrencies } from '../store/slices/multipleSelectSlice';

const CurrenciesPage = () => {
  const { selectedCurrencies } = useAppSelector(
    (state) => state.multipleSelectState,
  );
  const dispatch = useAppDispatch();

  const handleMultipleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
  ) => {
    dispatch(setSelectedCurrencies(value));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      height="400px"
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography variant="headline" color="primary.main" fontSize={24}>
          Select your currency:
        </Typography>
        <CurrencySelect isFrom />
      </Stack>
      <MultipleCurrenciesSelect
        selected={selectedCurrencies}
        onSelect={handleMultipleSelect}
      />
      <ExchangeRatesTable />
    </Box>
  );
};

export default CurrenciesPage;
