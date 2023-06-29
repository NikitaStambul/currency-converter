import React from 'react';
import { Autocomplete, TextField, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFromCurrency, setToCurrency } from '../store/slices/currencySlice';
import { currencies } from '../constants/currencies';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInput-root .MuiInput-input': {
    color: theme.palette.text.secondary,
    outline: 'none',
    border: 'none',
    fontWeight: 600,
    padding: 0,

    '&::before': {
      border: 'none !important',
    },
  },
  '& .MuiAutocomplete-endAdornment .MuiButtonBase-root': {
    padding: 0,
  },
}));

const CurrencySelect = ({
  isFrom = false,
  placeholder,
}: {
  isFrom?: boolean;
  placeholder?: string;
}) => {
  const { fromCurrency, toCurrency } = useAppSelector(
    (state) => state.currencyState,
  );
  const dispatch = useAppDispatch();

  const handleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => {
    if (isFrom) {
      dispatch(setFromCurrency(value));
    } else {
      dispatch(setToCurrency(value));
    }
  };

  return (
    <Autocomplete
      sx={{ width: 74 }}
      options={currencies.map(cur => cur.abbreviation)}
      value={isFrom ? fromCurrency : toCurrency}
      disableClearable
      onChange={handleSelect}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder={placeholder}
          variant="standard"
        />
      )}
    />
  );
};

export default CurrencySelect;
