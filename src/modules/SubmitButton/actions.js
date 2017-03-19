import promiseAction from '../../utils/promiseAction.js';
import { submitIt } from '../../api.js';
import types from './types.js';

const state2server = ({ checkboxes, togglebuttons, textfield, selectbox }) => ({
  a: Object.keys(checkboxes).filter(i => checkboxes[i]),
  b: togglebuttons.selected,
  text: textfield.value,
  c: selectbox.selected,
});

export default () => (dispatch, getState) => {
  promiseAction(
    dispatch,
    types.SUBMITBUTTON_CLICKED,
    submitIt(state2server(getState())),
  );
};

