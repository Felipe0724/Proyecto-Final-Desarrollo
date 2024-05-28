import { createSlice } from '@reduxjs/toolkit';

const contador6Slice = createSlice({
    name: 'counter6',
    initialState: { value: 0 },
    reducers: {
      incrementar6: (state) => {
        state.value += 1;
      },
      decrementar6: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset6: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar6, decrementar6, reset6 } = contador6Slice.actions;
  export default contador6Slice.reducer;