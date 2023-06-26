import {
  Box,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrency } from '../../store/slices/currencySlice';
import { ReactComponent as Swap } from '../../assets/swap.svg';

const Converter = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);
  const dispatch = useAppDispatch();

  const [toCurrency, setToCurrency] = useState<string | undefined>('USD');
  const [amount, setAmount] = useState('');

  const handleToSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    setToCurrency(value);
  };

  const handleFromSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    dispatch(setCurrency(value));
  };

  const handleSwapClick = () => {
    dispatch(setCurrency(toCurrency));
    setToCurrency(currency);
  };

  const exchangeRate = (() => {
    if (!currency || !toCurrency) {
      return 1;
    }

    const fromRate = exchangeRates[currency];
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
        <Stack direction="row" justifyContent="space-between" gap={2} width='100%'>
          <Stack gap={2}>
            <CurrencySelect
              label="From"
              selected={currency}
              onSelect={handleFromSelect}
            />
          </Stack>

          <Stack gap={2}>
            <CurrencySelect
              label="To"
              selected={toCurrency}
              onSelect={handleToSelect}
            />
          </Stack>
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
                size="small"
                value={amount}
                variant="standard"
                onChange={(e) => setAmount(e.target.value)}
              />
              <Typography variant="caption">{`1 ${currency} = ${exchangeRate?.toFixed(
                2,
              )} ${toCurrency}`}</Typography>
            </Stack>
          </Stack>

          <IconButton onClick={handleSwapClick} sx={{marginBottom: -3}}>
            <Swap />
          </IconButton>

          <Stack>
            <Typography>Result</Typography>
            <Stack
              direction="column"
              border="1px solid grey"
              borderRadius={1}
              p={1}
            >
              <TextField
                size="small"
                value={result?.toFixed(2)}
                variant="standard"
                disabled
                onChange={(e) => setAmount(e.target.value)}
              />
              <Typography variant="caption">{`1 ${toCurrency} = ${(
                1 / exchangeRate
              ).toFixed(2)} ${currency}`}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Converter;
