import React from 'react';
import { currencyKeys } from '../constants/currencyKeys';
import { Autocomplete, TextField } from '@mui/material';

const MultipleCurrenciesSelect = ({
  selected,
  onSelect,
}: {
  selected: string[];
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
  ) => void;
}) => {
  return (
    <Autocomplete
      multiple
      sx={{ width: '100%', maxWidth: '400px' }}
      value={selected}
      onChange={onSelect}
      size="small"
      options={currencyKeys}
      renderInput={(params) => <TextField {...params} label="To:" />}
    />
  );
};

export default MultipleCurrenciesSelect;
