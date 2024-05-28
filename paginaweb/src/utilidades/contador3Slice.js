import { createSlice } from '@reduxjs/toolkit';

const contador3Slice = createSlice({
    name: 'counter3',
    initialState: { value: 0 },
    reducers: {
      incrementar3: (state) => {
        state.value += 1;
      },
      decrementar3: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset3: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar3, decrementar3, reset3 } = contador3Slice.actions;
  export default contador3Slice.reducer;