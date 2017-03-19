import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import handle from './actions';

const CheckBoxes = ({ checkboxes, onChange }) => (
  <div>
    {Object.keys(checkboxes).map(i => (
      <div key={i}>
        <label htmlFor={i}>{i}</label>
        <input id={i} type="checkbox" checked={checkboxes[i]} onChange={onChange} />
      </div>
    ))}
  </div>
);

CheckBoxes.propTypes = {
  checkboxes: PropTypes.objectOf(React.PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(
    state => state,
    dispatch => ({
      onChange: event => dispatch(handle(event.target.id, event.target.checked)),
    }),
)(CheckBoxes);
