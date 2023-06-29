import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../store/hooks';
import { getCurrencyName } from '../helpers/getCurrencyName';

const TitleWithAccent = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 700,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'center',
  fontSize: 18,
}));

const Prompt = () => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );

  const fromName = getCurrencyName(fromCurrency);
  const toName = getCurrencyName(toCurrency);

  return (
    <Stack gap={2} mb={5}>
      <TitleWithAccent>{fromName} to {toName}</TitleWithAccent>
      <Title>Convert {fromCurrency} to {toCurrency} at the real exchange rate</Title>
    </Stack>
  );
};

export default Prompt;
