import { createSlice } from '@reduxjs/toolkit';

const contador7Slice = createSlice({
    name: 'counter7',
    initialState: { value: 0 },
    reducers: {
      incrementar7: (state) => {
        state.value += 1;
      },
      decrementar7: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset7: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar7, decrementar7, reset7 } = contador7Slice.actions;
  export default contador7Slice.reducer;