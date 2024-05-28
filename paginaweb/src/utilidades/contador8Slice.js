import { createSlice } from '@reduxjs/toolkit';

const contador8Slice = createSlice({
    name: 'counter8',
    initialState: { value: 0 },
    reducers: {
      incrementar8: (state) => {
        state.value += 1;
      },
      decrementar8: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset8: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar8, decrementar8, reset8 } = contador8Slice.actions;
  export default contador8Slice.reducer;