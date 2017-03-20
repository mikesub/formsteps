import promiseAction from '../../utils/promiseAction.js';
import actionHelper from '../../utils/actionCreator.js';
import { checkIt } from '../../api.js';
import types from './types.js';

const handle = value => actionHelper(types.TEXTFIELD_CHANGED, value);
const reset = () => actionHelper(types.TEXTFIELD_RESET);

const check = () => (dispatch, getState) => {
  promiseAction(
    dispatch,
    types.TEXTFIELD_CHECKED,
    checkIt(getState().textfield.value),
  );
};

export {
  handle,
  check,
  reset,
};
