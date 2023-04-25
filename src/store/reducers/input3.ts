import { createAction, createReducer } from '@reduxjs/toolkit';

interface Exo3State {
  inputExo3: boolean
}

// == State
const initialState: Exo3State = {
  inputExo3: false,
};

export const setInputExo3 = createAction<boolean>('input1/ADD_INPUT_EXO3');

const input3Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInputExo3, (state, action) => {
      state.inputExo3 = action.payload;
    });
});
export default input3Reducer;
