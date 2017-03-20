import types from './types.js';
import actionHelper from '../../utils/actionCreator.js';

const handle = value => actionHelper(types.TOGGLEBUTTONS_CLICKED, value);
const reset = () => actionHelper(types.TOGGLEBUTTONS_RESET);

export {
  handle,
  reset,
};
