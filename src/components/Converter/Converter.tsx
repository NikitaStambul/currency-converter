import { Box, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { useAppSelector } from '../../store/hooks';

const Converter = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);

  const [toCurrency, setToCurrency] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const handleToSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null,
  ) => {
    setToCurrency(value);
  };

  const result = (() => {
    if (!currency || !toCurrency) {
      return;
    }

    const fromRate = exchangeRates[currency];
    const toRate = exchangeRates[toCurrency];

    return (toRate * +value) / fromRate;
  })();

  return (
    <Paper>
      <Box display='flex' alignItems='center' gap={2} paddingX={2} paddingY={1}>
        <Typography>From {currency}</Typography>
        <TextField
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Typography>To</Typography>
        <CurrencySelect selected={toCurrency} onSelect={handleToSelect} />
        <Typography>Result: {result?.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default Converter;
