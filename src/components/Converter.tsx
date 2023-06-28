import {
  Box,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { swapCurrencies } from '../store/slices/currencySlice';
import { ReactComponent as Swap } from '../assets/swap.svg';

const Converter = () => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState('');

  const handleSwapClick = () => {
    dispatch(swapCurrencies());
  };

  const exchangeRate = (() => {
    if (!fromCurrency || !toCurrency) {
      return 1;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    return toRate / fromRate;
  })();

  const result = (() => {
    if (!exchangeRate) {
      return;
    }

    return exchangeRate * +amount;
  })();

  return (
    <Paper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        padding={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          width="100%"
        >
          <CurrencySelect type="from" />

          <IconButton onClick={handleSwapClick}>
            <Swap />
          </IconButton>

          <CurrencySelect type="to" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={2}
          alignItems="center"
        >
          <Stack>
            <Typography>Amount</Typography>
            <Stack
              direction="column"
              border="1px solid grey"
              borderRadius={1}
              p={1}
            >
              <TextField
                InputProps={{
                  sx: {
                    fontSize: '1.5rem',
                  },
                }}
                value={amount}
                variant="standard"
                placeholder={`0.00 ${fromCurrency}`}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Typography variant="caption">{`1 ${fromCurrency} = ${exchangeRate?.toFixed(
                2,
              )} ${toCurrency}`}</Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography>Result</Typography>
            <Stack
              direction="column"
              border="1px solid grey"
              borderRadius={1}
              p={1}
            >
              <TextField
                InputProps={{
                  sx: {
                    fontSize: '1.5rem',
                  },
                }}
                value={result?.toFixed(2) + ' ' + (toCurrency || '')}
                variant="standard"
                disabled
                onChange={(e) => setAmount(e.target.value)}
              />
              <Typography variant="caption">{`1 ${toCurrency} = ${(
                1 / exchangeRate
              ).toFixed(2)} ${fromCurrency}`}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Converter;
