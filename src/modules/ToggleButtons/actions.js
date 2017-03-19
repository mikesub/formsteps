import types from './types.js';
import actionHelper from '../../utils/actionCreator.js';

export default value => actionHelper(types.TOGGLEBUTTONS_CLICKED, value);
