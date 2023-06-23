import React from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import NavLink from '../NavLink';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import { setCurrency } from '../../store/slices/currencySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ReactComponent as Logo } from '../../assets/logo.svg';

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
    <Paper>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={60}
        >
          <Logo />
          <Stack direction="row" height="100%" mr={2}>
            <NavLink to="/">Currencies</NavLink>
            <NavLink to="/converter">Converter</NavLink>
          </Stack>
          <CurrencySelect selected={currency} onSelect={handleSelect} />
        </Box>
      </Container>
    </Paper>
  );
};

export default Header;
