import recalculate from './actions.js';

import CheckBoxes from '../CheckBoxes/types.js';
import ToggleButtons from '../ToggleButtons/types.js';
import TextField from '../TextField/types.js';
import SelectBox from '../SelectBox/types.js';
import { reset as submitReset } from '../SubmitButton/actions.js';

export default (type, dispatch) => {
  const actionsToReactOn = [
    CheckBoxes.CHECKBOXES_SELECTED,
    ToggleButtons.TOGGLEBUTTONS_CLICKED,
    TextField.TEXTFIELD_CHECKED,
    TextField.TEXTFIELD_CHANGED,
    SelectBox.SELECTBOX_SELECTED,
  ];

  // there are some false positives here: it reacts on textfield and submitbutton pending actions
  // but it's not critical for now

  if (actionsToReactOn.includes(type)) {
    dispatch(recalculate());
    dispatch(submitReset());
  }
};
