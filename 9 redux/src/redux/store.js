import { configureStore } from '@reduxjs/toolkit';
import jsonDataReducer from './slice/jsonDataSlice';

const store = configureStore({
  reducer: {
    jsonData: jsonDataReducer,
  },
});

export default store;
