import actionHelper from '../../utils/actionCreator.js';
import types from './types.js';

export default (label, value) => actionHelper(types.CHECKBOXES_SELECTED, { label, value });
