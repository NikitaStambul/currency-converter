import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchExchange } from './store/slices/exchangeSlice';
import Loader from './components/Loader';
import Footer from './components/Footer';

const FirstCurrencySelect = lazy(
  () => import('./components/FirstCurrencySelect'),
);
const ConverterPage = lazy(() => import('./pages/ConverterPage'));
const CurrenciesPage = lazy(() => import('./pages/CurrenciesPage'));

function App() {
  const { fromCurrency } = useAppSelector((state) => state.currencyState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

  if (!fromCurrency) {
    return (
      <Suspense fallback={<Loader />}>
        <FirstCurrencySelect />
      </Suspense>
    );
  }

  return (
    <Stack minHeight="100dvh" justifyContent="space-between">
      <Header />
      <Container
        sx={{
          padding: '60px 0',
          marginBottom: 0,
          minHeight: 600,
          flex: 1,
          maxHeight: 'calc(100dvh - 140px)',
        }}
        maxWidth="tablet"
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<CurrenciesPage />} />
            <Route path="/converter" element={<ConverterPage />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </Stack>
  );
}

export default App;
