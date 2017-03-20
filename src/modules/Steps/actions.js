import takeRight from 'lodash/takeRight';
import actionHelper from '../../utils/actionCreator.js';
import types from './types.js';

import * as CheckBoxes from '../CheckBoxes/actions.js';
import * as ToggleButtons from '../ToggleButtons/actions.js';
import * as TextField from '../TextField/actions.js';
import * as SelectBox from '../SelectBox/actions.js';
import * as SubmitButton from '../SubmitButton/actions.js';

export default () => (dispatch, getState) => {
  dispatch(actionHelper(types.STEPS_RECALCULATED, getState()));

  const currentStep = getState().steps.value;
  const totalSteps = 5;

  takeRight(
    [
      CheckBoxes,
      ToggleButtons,
      TextField,
      SelectBox,
      SubmitButton,
    ],
    totalSteps - currentStep,
  ).forEach(module => dispatch(module.reset()));
};
