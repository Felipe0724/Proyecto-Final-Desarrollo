import { createSlice } from '@reduxjs/toolkit';

const contador2Slice = createSlice({
    name: 'counter2',
    initialState: { value: 0 },
    reducers: {
      incrementar2: (state) => {
        state.value += 1;
      },
      decrementar2: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        }
      },
      reset2: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const { incrementar2, decrementar2, reset2 } = contador2Slice.actions;
  export default contador2Slice.reducer;