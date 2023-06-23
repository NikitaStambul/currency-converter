import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLocaleData } from '../../api/locale';
import { LocalStorageKeys } from '../LocalStorageKeys';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async () => {
    const { data } = await getLocaleData();

    return data.currency;
  },
);

export interface State {
  currency: string | null;
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: State = {
  currency: null,
  isLoaded: false,
  hasError: false,
};

const stateFromStorage: State = JSON.parse(
  localStorage.getItem(LocalStorageKeys.CurrencyState) || JSON.stringify(initialState),
);

const localeSlice = createSlice({
  name: 'currency',
  initialState: stateFromStorage,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.currency = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.isLoaded = true;
        state.hasError = true;
      });
  },
});

export const { setCurrency } = localeSlice.actions;

export default localeSlice.reducer;
