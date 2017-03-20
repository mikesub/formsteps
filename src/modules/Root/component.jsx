import React from 'react';
import 'normalize.css';
import CheckBoxes from '../CheckBoxes/component.jsx';
import ToggleButtons from '../ToggleButtons/component.jsx';
import SelectBox from '../SelectBox/component.jsx';
import TextField from '../TextField/component.jsx';
import SubmitButton from '../SubmitButton/component.jsx';
import Steps from '../Steps/component.jsx';

const Root = () => (
  <Steps>
    <CheckBoxes />
    <ToggleButtons />
    <TextField />
    <SelectBox />
    <SubmitButton />
  </Steps>
);

export default Root;

