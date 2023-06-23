import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { currencyKeys } from '../../constants/currencyKeys';

const CurrencySelect = ({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null,
  ) => void;
}) => {
 

  return (
    <Autocomplete
      sx={{
        width: 180,
      }}
      size="small"
      options={currencyKeys}
      value={selected}
      onChange={onSelect}
      renderInput={(params) => (
        <TextField {...params} label="Select Currency" variant="outlined" />
      )}
    />
  );
};

export default CurrencySelect;
