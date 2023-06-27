import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchExchange } from './store/slices/exchangeSlice';
import Loader from './components/Loader/Loader';

const FirstCurrencySelect = lazy(
  () => import('./components/FirstCurrencySelect'),
);
const ConverterPage = lazy(() => import('./pages/ConverterPage'));
const CurrenciesPage = lazy(() => import('./pages/CurrenciesPage'));

function App() {
  const { fromCurrency: currency } = useAppSelector(
    (state) => state.currencyState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

  if (!currency) {
    return (
      <Suspense fallback={<Loader />}>
        <FirstCurrencySelect />
      </Suspense>
    );
  }

  return (
    <div className="App">
      <Header />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<CurrenciesPage />} />
            <Route path="/converter" element={<ConverterPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
