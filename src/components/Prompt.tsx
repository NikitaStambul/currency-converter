import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import { getCurrencyName } from '../helpers/getCurrencyName';

const Prompt = () => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );

  const fromName = getCurrencyName(fromCurrency);
  const toName = getCurrencyName(toCurrency);

  return (
    <Stack gap={2}>
      <Typography variant="headline" color="primary.main" fontSize={24}>
        {fromName} to {toName}
      </Typography>
      <Typography textAlign="center">
        Convert {fromCurrency} to {toCurrency} at the real exchange rate
      </Typography>
    </Stack>
  );
};

export default Prompt;
