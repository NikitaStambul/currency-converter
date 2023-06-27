import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';
import exchangeReducer from './slices/exchangeSlice';
import multipleSelectReducer from './slices/multipleSelectSlice';
import { Middleware } from 'redux';
import { LocalStorageKeys } from './LocalStorageKeys';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem(
    LocalStorageKeys.CurrencyState,
    JSON.stringify(store.getState().currencyState),
  );

  return result;
};

export const store = configureStore({
  reducer: {
    currencyState: currencyReducer,
    exchangeState: exchangeReducer,
    multipleSelectState: multipleSelectReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
