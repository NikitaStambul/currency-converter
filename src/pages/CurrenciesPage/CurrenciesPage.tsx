import React, { useEffect } from 'react';
import ExchangeRatesTable from '../../components/ExchangeRatesTable';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchExchange } from '../../store/slices/exchangeSlice';

const CurrenciesPage = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

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
