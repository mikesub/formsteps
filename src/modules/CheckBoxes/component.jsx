import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { handle } from './actions';
import css from './index.css';

const CheckBoxes = ({ checkboxes, onChange }) => (
  <div className={css.wrap}>
    {Object.keys(checkboxes).map(i => (
      <div key={i} className={css.item}>
        <input id={i} type="checkbox" checked={checkboxes[i]} onChange={onChange} />
        <label htmlFor={i} className={css.label}>{i}</label>
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
