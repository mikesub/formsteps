import promiseAction from '../../utils/promiseAction.js';
import { submitIt } from '../../api.js';
import types from './types.js';

// while modules are not coupled, here you need to know internals of other stores
// TODO: refactor to use a designated "public" key for each module's value

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

