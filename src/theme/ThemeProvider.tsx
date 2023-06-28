'use client';

/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider as Provider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a73e8',
      },
      secondary: {
        main: '#a35aff',
      },
      text: {
        primary: '#3f3f3f',
        secondary: '#6b7280',
        dark: '#111827',
      },
      background: {
        default: '#ffffff',
        secondary: '#edf6fc',
      },
      accent: {
        main: '#04be74',
        contrastText: '#121212',
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
      },
    },
    typography: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: 16
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: '0 40px',
          },
        },
      },
    },
  });

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
