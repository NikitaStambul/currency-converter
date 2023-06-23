import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getLocaleData } from '../../api/locale';
import { useAppDispatch } from '../../store/hooks';
import { setCurrency } from '../../store/slices/currencySlice';

const GuessedCurrency = () => {
  const dispatch = useAppDispatch();
  const [guessedCurrency, setGuessedCurrency] = useState('');

  useEffect(() => {
    async function getGuessedCurrency() {
      try {
        const locale = await getLocaleData();

        setGuessedCurrency(locale.data.currency);
      } catch (error) {
        setGuessedCurrency('USD')
      }
    }

    getGuessedCurrency();
  }, []);

  const handleAcceptGuess = () => {
    dispatch(setCurrency(guessedCurrency));
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant='h6' mr={2}>Is it your currency: {guessedCurrency}?</Typography>
      <Button variant='outlined' onClick={handleAcceptGuess}>Yes</Button>
    </Box>
  );
};

export default GuessedCurrency;
