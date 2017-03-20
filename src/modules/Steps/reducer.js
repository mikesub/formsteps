import some from 'lodash/some';
import values from 'lodash/values';
import takeWhile from 'lodash/takeWhile';
import types from './types.js';

const initialState = {
  value: 1,
};

// while modules are not coupled, here you need to know internals of other stores
// TODO: refactor to use a designated "public" key for each module's value

const calc = ({ checkboxes, togglebuttons, textfield, selectbox }) =>
  takeWhile([
    some(values(checkboxes)),
    togglebuttons.selected,
    textfield.validated && !textfield.pending,
    selectbox.selected,
  ]).length + 1;

const reducer = (state, action) => {
  if (action.type !== types.STEPS_CALC) {
    return state;
  }
  return {
    value: calc(action.payload),
  };
};

export default { reducer, initialState };
