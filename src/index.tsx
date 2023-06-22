import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from './store/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
