import { Button, Stack, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getLocaleData } from '../api/locale';
import { setFromCurrency } from '../store/slices/currencySlice';
import CurrencySelect from './CurrencySelect';
import { useAppDispatch } from '../store/hooks';

const StyledStack = styled(Stack)(({ theme }) => ({
  maxWidth: '100%',
  background: theme.palette.background.secondary,
  borderRadius: 30,
  padding: 40,
}));

const SelectedCurrencyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
  fontWeight: 600,
  textAlign: 'center',
}));

const StyledCurrency = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '8px 48px',
  color: '#ffffff',
  textTransform: 'none',
  gap: '10px',
  borderRadius: 40,
  fontWeight: 600,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

const WelcomeBanner = () => {
  const dispatch = useAppDispatch();
  const [guessedCurrency, setGuessedCurrency] = useState('');

  useEffect(() => {
    async function getGuessedCurrency() {
      try {
        const locale = await getLocaleData();

        setGuessedCurrency(locale.data.currency);
      } catch (error) {
        setGuessedCurrency('UAH');
      }
    }

    getGuessedCurrency();
  }, []);

  const handleAcceptGuess = () => {
    dispatch(setFromCurrency(guessedCurrency));
  };

  return (
    <StyledStack spacing={5}>
      <SelectedCurrencyText>
        Selected currency: <StyledCurrency>{guessedCurrency}</StyledCurrency>
      </SelectedCurrencyText>
      <Stack spacing={2.5} alignItems="center">
        <Text>
          Based on your location, we assume
          <br /> your currency is {guessedCurrency}, is it correct?
        </Text>
        <StyledButton onClick={handleAcceptGuess}>Yes! 👌</StyledButton>
      </Stack>
      <Stack spacing={2.5} alignItems="center">
        <Text>If not, select one from the list below 😉</Text>
        <CurrencySelect isFrom placeholder={guessedCurrency} />
      </Stack>
    </StyledStack>
  );
};

export default WelcomeBanner;
