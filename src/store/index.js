import { configureStore } from '@reduxjs/toolkit';
import clicarSlice from '../features/click/clicarSlice';

export const store = configureStore({
  reducer: {
    clicar: clicarSlice,
  },
});
