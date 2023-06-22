import React, { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/CurrenciesPage';
import { Container } from '@mui/material';
import { useAppDispatch } from './store/hooks';
import { fetchCurrency } from './store/slices/currencySlice';
import { fetchExchange } from './store/slices/exchangeSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
    dispatch(fetchExchange());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2 }}
      >
        <Routes>
          <Route path="/" element={<CurrenciesPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
