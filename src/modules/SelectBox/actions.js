import actionHelper from '../../utils/actionCreator.js';
import types from './types.js';

export default value => actionHelper(types.SELECTBOX_SELECTED, value);
