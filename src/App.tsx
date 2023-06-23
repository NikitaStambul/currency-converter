import React, { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/CurrenciesPage';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from './store/hooks';
import FirstCurrencySelect from './components/FirstCurrencySelect/FirstCurrencySelect';
import ConverterPage from './pages/ConverterPage/ConverterPage';
import { fetchExchange } from './store/slices/exchangeSlice';

function App() {
  const { currency } = useAppSelector(state => state.currencyState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

  if (!currency) {
    return (<FirstCurrencySelect />);
  }

  return (
    <div className="App">
      <Header />
      <Container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}
      >
        <Routes>
          <Route path="/" element={<CurrenciesPage />} />
          <Route path="/converter" element={<ConverterPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
