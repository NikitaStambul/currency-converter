import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageKeys } from '../LocalStorageKeys';

export interface State {
  fromCurrency?: string;
  toCurrency?: string;
}

const initialState: State = {
  fromCurrency: undefined,
  toCurrency: 'USD',
};

const stateFromStorage: State = JSON.parse(
  localStorage.getItem(LocalStorageKeys.CurrencyState) ||
    JSON.stringify(initialState),
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: stateFromStorage,
  reducers: {
    setFromCurrency: (state, action) => {
      const temp = state.fromCurrency;
      state.fromCurrency = action.payload;

      if (action.payload === state.toCurrency) {
        state.toCurrency = temp;
      }
    },
    setToCurrency: (state, action) => {
      const temp = state.toCurrency;
      state.toCurrency = action.payload;

      if (action.payload === state.fromCurrency) {
        state.fromCurrency = temp;
      }
    },
    swapCurrencies: (state) => {
      const temp = state.fromCurrency;

      state.fromCurrency = state.toCurrency;
      state.toCurrency = temp;
    },
  },
});

export const { setFromCurrency, setToCurrency, swapCurrencies } = currencySlice.actions;

export default currencySlice.reducer;
