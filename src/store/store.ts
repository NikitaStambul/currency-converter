import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';
import { Middleware } from 'redux';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem(
    'currency',
    JSON.stringify(store.getState().currencyState),
  );

  return result;
};

export const store = configureStore({
  reducer: {
    currencyState: currencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
