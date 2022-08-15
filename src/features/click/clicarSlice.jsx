import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  botaoClicado: true,
};

const clicarSlice = createSlice({
  name: 'clicar',
  initialState,
  reducers: {
    clicar: (state) => {
      state.botaoClicado = !state.botaoClicado;
    },
  },
});

export const { clicar } = clicarSlice.actions;

export default clicarSlice.reducer;
