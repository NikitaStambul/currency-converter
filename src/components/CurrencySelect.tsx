import React from 'react';
import { Autocomplete, TextField, styled } from '@mui/material';
import { currencyKeys } from '../constants/currencyKeys';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFromCurrency, setToCurrency } from '../store/slices/currencySlice';

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
  type,
  placeholder,
}: {
  type: 'from' | 'to';
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
    if (type === 'from') {
      dispatch(setFromCurrency(value));
    } else {
      dispatch(setToCurrency(value));
    }
  };

  return (
    <Autocomplete
      sx={{ width: 74 }}
      options={currencyKeys}
      value={type === 'from' ? fromCurrency : toCurrency}
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
