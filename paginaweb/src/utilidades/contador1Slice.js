import { createSlice } from '@reduxjs/toolkit';

const contador1Slice = createSlice({
    name: 'counter1',
    initialState: { value: 0 },
    reducers: {
      incrementar1: (state) => {
        state.value += 1;
      },
      decrementar1: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset1: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar1, decrementar1, reset1 } = contador1Slice.actions;
  export default contador1Slice.reducer;