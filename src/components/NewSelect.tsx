import React from 'react';
import { ReactComponent as Chevron } from '../../assets/arrow-down.svg';
import { Autocomplete } from '@mui/material';
import { styled } from '@mui/material';
import { currencies } from '../constants/currencies';

const CustomInput = styled('input')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.text.secondary,
  fontSize: 'inherit',
  outline: 'none',
  border: 'none',
  fontWeight: 600,
  width: 60,
}));

const InputContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledChevron = styled(Chevron)(({ theme }) => ({
  stroke: theme.palette.text.secondary,
}));

const NewSelect = ({
  value,
  onSelect,
}: {
  value?: string;
  onSelect: (
    event: React.SyntheticEvent<Element, Event>,
    value?: string,
  ) => void;
}) => {
  return (
    <Autocomplete
      options={currencies.map((cur) => cur.abbreviation)}
      value={value}
      renderInput={(params) => (
        <InputContainer ref={params.InputProps.ref}>
          <CustomInput type="text" {...params.inputProps} />
          <StyledChevron />
        </InputContainer>
      )}
    />
  );
};

export default NewSelect;
