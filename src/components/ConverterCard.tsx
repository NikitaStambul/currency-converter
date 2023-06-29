import React from 'react';
import { Stack, Typography, styled } from '@mui/material';
import CurrencySelect from './CurrencySelect';
import { useAppSelector } from '../store/hooks';
import CurrencyInput from './CurrencyInput';

const Main = styled(Stack)(({ theme }) => ({
  padding: '12px 32px',
  background: '#ffffff',
  borderRadius: 16,
  gap: 8,
}));

const Label = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

const Tooltip = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 12,
}));

const BlueAccent = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const ConverterCard = ({ isFrom = false }: { isFrom?: boolean }) => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);

  const exchangeRate = (() => {
    if (!fromCurrency || !toCurrency) {
      return 1;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    return toRate / fromRate;
  })();

  return (
    <Main>
      <Stack direction="row" justifyContent="space-between">
        <Label>{isFrom ? 'From' : 'To'}:</Label>
        <CurrencySelect isFrom={isFrom} />
      </Stack>
      <Stack gap={1}>
        <CurrencyInput isFrom={isFrom} />
        {isFrom ? (
          <Tooltip>
            {`1 ${fromCurrency} = `}
            <BlueAccent>{exchangeRate.toFixed(3)}</BlueAccent>
            {` ${toCurrency}`}
          </Tooltip>
        ) : (
          <Tooltip>
            {`1 ${toCurrency} = `}
            <BlueAccent>{(1 / exchangeRate).toFixed(3)}</BlueAccent>
            {` ${fromCurrency}`}
          </Tooltip>
        )}
      </Stack>
    </Main>
  );
};

export default ConverterCard;
