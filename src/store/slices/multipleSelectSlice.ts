import { createSlice } from '@reduxjs/toolkit';

export interface State {
  selectedCurrencies: string[];
}

const initialState: State = {
  selectedCurrencies: [],
};

const multipleSelectSlice = createSlice({
  name: 'multipleSelect',
  initialState,
  reducers: {
    setSelectedCurrencies: (state, action) => {
      state.selectedCurrencies = action.payload;
    },
  },
});

export const { setSelectedCurrencies } = multipleSelectSlice.actions;

export default multipleSelectSlice.reducer;
