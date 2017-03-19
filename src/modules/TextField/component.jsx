import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { handle, check } from './actions';

const TextField = ({ value, pending, error, errorMessage, onChange, onClick }) => (
  <div>
    <input type="text" onChange={onChange} value={value} />
    <button onClick={onClick} disabled={pending}>Check{pending ? 'ing' : ''}</button>
    {error ? errorMessage : null}
  </div>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default connect(
    state => state.textfield,
    dispatch => ({
      onChange: e => dispatch(handle(e.target.value)),
      onClick: () => dispatch(check()),
    }),
)(TextField);
