import { createSlice } from '@reduxjs/toolkit';

const contador5Slice = createSlice({
    name: 'counter5',
    initialState: { value: 0 },
    reducers: {
      incrementar5: (state) => {
        state.value += 1;
      },
      decrementar5: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset5: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar5, decrementar5, reset5 } = contador5Slice.actions;
  export default contador5Slice.reducer;