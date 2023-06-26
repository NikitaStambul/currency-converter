import React, { useState } from 'react';
import ExchangeRatesTable from '../../components/ExchangeRatesTable';
import { Box, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import CurrencySelect from '../../components/CurrencySelect/CurrencySelect';
import { setCurrency } from '../../store/slices/currencySlice';
import MultipleCurrenciesSelect from '../../components/MultipleCurrenciesSelect';

const CurrenciesPage = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    dispatch(setCurrency(value));
  };

  const handleMultipleSelect = (event: React.SyntheticEvent<Element, Event>, value: string[]) => {
    setSelected(value);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxHeight='calc(100dvh - 100px)' width='400px'>
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography variant="h6">Select currency:</Typography>
        <CurrencySelect selected={currency} onSelect={handleSelect} />
      </Stack>
      <MultipleCurrenciesSelect
        selected={selected}
        onSelect={handleMultipleSelect}
      />
      <ExchangeRatesTable filter={selected} />
    </Box>
  );
};

export default CurrenciesPage;
