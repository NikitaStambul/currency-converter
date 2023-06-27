import React from 'react';
import StoreProvider from './store/StoreProvider';
import ThemeProvider from './theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <CssBaseline />
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
