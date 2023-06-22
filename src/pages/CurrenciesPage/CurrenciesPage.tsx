import React from 'react';
import ExchangeRatesTable from '../../components/ExchangeRatesTable';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';

const CurrenciesPage = () => {
  const { currency } = useAppSelector(state => state.currencyState)
  

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" mb={2}>
        Selected currency: {currency}
      </Typography>
      <ExchangeRatesTable />
    </Box>
  );
};

export default CurrenciesPage;
