import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageKeys } from '../LocalStorageKeys';

export interface State {
  fromCurrency?: string;
  toCurrency?: string;
}

const initialState: State = {
  fromCurrency: undefined,
  toCurrency: undefined,
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
      state.fromCurrency = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
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
