import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { currencies } from '../constants/currencies';

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
      options={currencies.map(cur => cur.abbreviation)}
      renderInput={(params) => <TextField {...params} label="To:" />}
    />
  );
};

export default MultipleCurrenciesSelect;
