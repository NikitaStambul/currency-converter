import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { currencyKeys } from '../../constants/currencyKeys';

const CurrencySelect = ({
  selected,
  label,
  onSelect,
}: {
  selected?: string;
  label?: string;
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
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
      disableClearable
      onChange={onSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default CurrencySelect;
