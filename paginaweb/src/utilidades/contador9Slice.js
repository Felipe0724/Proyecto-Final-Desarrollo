import { createSlice } from '@reduxjs/toolkit';

const contador9Slice = createSlice({
    name: 'counter9',
    initialState: { value: 0 },
    reducers: {
      incrementar9: (state) => {
        state.value += 1;
      },
      decrementar9: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset9: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar9, decrementar9, reset9 } = contador9Slice.actions;
  export default contador9Slice.reducer;