import actionHelper from '../../utils/actionCreator.js';
import types from './types.js';

const handle = value => actionHelper(types.SELECTBOX_SELECTED, value);
const reset = () => actionHelper(types.SELECTBOX_RESET);

export {
  handle,
  reset,
};
