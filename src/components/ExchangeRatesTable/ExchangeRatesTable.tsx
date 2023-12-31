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
import { getRelativeExchangeRates } from '../../helpers/getRelativeExchangeRates';
import { useAppSelector } from '../../store/hooks';

const ExchangeRatesTable = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);

  const relativeRates = getRelativeExchangeRates(currency, exchangeRates);

  return (
    <TableContainer component={Paper} sx={{ height: 'calc(100vh - 150px)' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency Code</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(relativeRates).map(([currencyCode, number]) => (
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
