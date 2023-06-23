import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/CurrenciesPage';
import { Container } from '@mui/material';
import { useAppSelector } from './store/hooks';
import FirstCurrencySelect from './components/FirstCurrencySelect/FirstCurrencySelect';
import ConverterPage from './pages/ConverterPage/ConverterPage';

function App() {
  const { currency } = useAppSelector(state => state.currencyState);

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
