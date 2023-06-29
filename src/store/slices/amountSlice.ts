import { createSlice } from '@reduxjs/toolkit';

export interface State {
  fromAmount: string;
  toAmount: string;
}

const initialState: State = {
  fromAmount: '',
  toAmount: '',
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
    swapAmount: (state) => {
      const temp = state.fromAmount;

      state.fromAmount = state.toAmount;
      state.toAmount = temp;
    },
  },
});

export const { setFromAmount, setToAmount, swapAmount } = amountSlice.actions;

export default amountSlice.reducer;
