import actionHelper from '../../utils/actionCreator.js';
import types from './types.js';

const reset = () => actionHelper(types.CHECKBOXES_RESET);
const handle = (label, value) => actionHelper(types.CHECKBOXES_SELECTED, { label, value });

export {
  handle,
  reset,
};
