import { createSlice } from '@reduxjs/toolkit';

export interface State {
  fromAmount?: number;
  toAmount?: number;
}

const initialState: State = {
  fromAmount: undefined,
  toAmount: undefined,
};

const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setFromAmount: (state, action) => {
      state.fromAmount = action.payload;
    },
    setToAmount: (state, action) => {
      state.toAmount = action.payload;
    },
  },
});

export const { setFromAmount, setToAmount } = amountSlice.actions;

export default amountSlice.reducer;
