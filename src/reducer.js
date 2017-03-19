import mapValues from 'lodash/mapValues';
import { combineReducers } from 'redux';

import checkboxes from './modules/CheckBoxes/reducer.js';
import togglebuttons from './modules/ToggleButtons/reducer.js';
import selectbox from './modules/SelectBox/reducer.js';
import textfield from './modules/TextField/reducer.js';
import submitbutton from './modules/SubmitButton/reducer.js';
import steps from './modules/Steps/reducer.js';

const updater = ({ reducer, initialState }) =>
  (state = initialState, action) =>
    ({ ...state, ...(reducer(state, action) || {}) });

const reducers = mapValues({
  checkboxes,
  togglebuttons,
  selectbox,
  textfield,
  submitbutton,
  steps,
}, updater);

export default combineReducers(reducers);
