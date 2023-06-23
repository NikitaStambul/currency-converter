import React from 'react';
import { Box, Stack } from '@mui/material';
import NavLink from '../NavLink';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { setCurrency } from '../../store/slices/currencySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Header = () => {
  const { currency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  const handleSelect = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null,
  ) => {
    dispatch(setCurrency(value));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#90a4ae"
      height={60}
    >
      <Stack direction="row" height='100%' mr={2}>
        <NavLink to="/">Currencies</NavLink>
        <NavLink to="/converter">Converter</NavLink>
      </Stack>
      <CurrencySelect selected={currency} onSelect={handleSelect} />
    </Box>
  );
};

export default Header;
