import some from 'lodash/some';
import values from 'lodash/values';
import takeWhile from 'lodash/takeWhile';
import types from './types.js';

const initialState = {
  value: 1,
};

const calc = ({ checkboxes, togglebuttons, textfield, selectbox }) =>
  takeWhile([
    some(values(checkboxes)),
    togglebuttons.selected,
    textfield.validated && !textfield.pending,
    selectbox.selected,
  ]).length + 1;

const reducer = (state, action) => {
  if (action.type !== types.STEPS_RECALCULATED) {
    return state;
  }
  return {
    value: calc(action.payload),
  };
};

export default { reducer, initialState };
