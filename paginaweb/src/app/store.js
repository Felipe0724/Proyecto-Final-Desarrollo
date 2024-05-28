import { configureStore } from '@reduxjs/toolkit';
import  loginReducer from '../utilidades/login/loginSlice';
import contador1Reducer from '../utilidades/contador1Slice';
import contador2Reducer from '../utilidades/contador2Slice';
import contador3Reducer from '../utilidades/contador3Slice';
import contador4Reducer from '../utilidades/contador4Slice';
import contador5Reducer from '../utilidades/contador5Slice';
import contador6Reducer from '../utilidades/contador6Slice';
import contador7Reducer from '../utilidades/contador7Slice';
import contador8Reducer from '../utilidades/contador8Slice';
import contador9Reducer from '../utilidades/contador9Slice';

export default configureStore({
    reducer: {
      login: loginReducer,
      contador1: contador1Reducer,
      contador2: contador2Reducer,
      contador3: contador3Reducer,
      contador4: contador4Reducer,
      contador5: contador5Reducer,
      contador6: contador6Reducer,
      contador7: contador7Reducer,
      contador8: contador8Reducer,
      contador9: contador9Reducer,
    },
  })
