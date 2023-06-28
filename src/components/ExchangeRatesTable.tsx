import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { getRelativeExchangeRates } from '../helpers/getRelativeExchangeRates';
import { useAppSelector } from '../store/hooks';
import { ExchangeRates } from '../api/exchange';

const ExchangeRatesTable = () => {
  const { selectedCurrencies } = useAppSelector(state => state.multipleSelectState);
  const { fromCurrency } = useAppSelector((state) => state.currencyState);
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);

  const relativeRates = getRelativeExchangeRates(fromCurrency, exchangeRates);

  const visibleRates = (() => {
    const visible: ExchangeRates = {};

    for (const key in relativeRates) {
      if (selectedCurrencies.includes(key)) {
        visible[key] = relativeRates[key];
      }
    }

    if (!Object.entries(visible).length) {
      return relativeRates;
    }

    return visible;
  })();

  return (
    <TableContainer component={Paper} sx={{ width: '100%', maxWidth: '400px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency Code</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(visibleRates).map(([currencyCode, number]) => (
            <TableRow key={currencyCode}>
              <TableCell>{currencyCode}</TableCell>
              <TableCell>{number.toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangeRatesTable;
