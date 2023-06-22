import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ExchangeRates, getExchangeData } from '../../api/exchange';

export const fetchExchange = createAsyncThunk(
  'exchange/fetchExchange',
  async () => {
    const { data } = await getExchangeData();

    return data.rates;
  },
);

export interface State {
  exchangeRates: ExchangeRates;
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: State = {
  exchangeRates: {},
  isLoaded: false,
  hasError: false,
};

const exchangeSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchange.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchExchange.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.exchangeRates = action.payload;
      })
      .addCase(fetchExchange.rejected, (state) => {
        state.isLoaded = true;
        state.hasError = true;
      });
  },
});

export default exchangeSlice.reducer;
