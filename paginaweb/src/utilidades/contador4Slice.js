import { createSlice } from '@reduxjs/toolkit';

const contador4Slice = createSlice({
    name: 'counter4',
    initialState: { value: 0 },
    reducers: {
      incrementar4: (state) => {
        state.value += 1;
      },
      decrementar4: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset4: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar4, decrementar4, reset4 } = contador4Slice.actions;
  export default contador4Slice.reducer;