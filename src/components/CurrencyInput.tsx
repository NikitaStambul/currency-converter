import { styled } from '@mui/material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { getCurrencySymbol } from '../helpers/getCurrencySymbol';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFromAmount, setToAmount } from '../store/slices/amountSlice';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& input': {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 600,
  },
  '& p': {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 600,
  },
}));

const CurrencyInput = ({ isFrom = false }: { isFrom?: boolean }) => {
  const dispatch = useAppDispatch();
  const { exchangeRates } = useAppSelector((state) => state.exchangeState);
  const { toCurrency, fromCurrency } = useAppSelector(
    (state) => state.currencyState,
  );
  const { toAmount, fromAmount } = useAppSelector((state) => state.amountState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const exchangeRate = (() => {
      if (!fromCurrency || !toCurrency) {
        return 1;
      }

      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];

      return toRate / fromRate;
    })();

    if (isFrom) {
      const result = +e.target.value * exchangeRate;
      dispatch(setFromAmount(e.target.value));
      dispatch(setToAmount(String(result.toFixed(2))));
    } else {
      const result = +e.target.value / exchangeRate;
      dispatch(setToAmount(e.target.value));
      dispatch(setFromAmount(String(result.toFixed(2))));
    }
  };

  return (
    <StyledTextField
      variant="standard"
      placeholder="0.00"
      onChange={handleChange}
      value={isFrom ? fromAmount : toAmount}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {getCurrencySymbol((isFrom ? fromCurrency : toCurrency) ?? 'Error')}
          </InputAdornment>
        ),
      }}
    >
      CurrencyInput
    </StyledTextField>
  );
};

export default CurrencyInput;
