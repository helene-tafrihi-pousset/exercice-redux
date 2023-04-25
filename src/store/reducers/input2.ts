import { createAction, createReducer } from '@reduxjs/toolkit';

interface Exo2State {
  inputExo2: string
  submit: string
}

// == State
const initialState: Exo2State = {
  inputExo2: '',
  submit: '',
};

export const setInputExo2 = createAction<string>('input2/ADD_INPUT_EXO2');
export const setSubmit = createAction('input2/ADD_SUBMIT_EXO2');

const input2Reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInputExo2, (state, action) => {
      state.inputExo2 = action.payload;
    })
    .addCase(setSubmit, (state) => {
      state.submit = state.inputExo2;
    });
});
export default input2Reducer;
