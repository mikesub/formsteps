import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import submit from './actions';

const SubmitButton = ({ pending, error, errorMessage, onClick }) => (
  <div>
    <button onClick={onClick} disabled={pending}>Submit{pending ? 'ting' : ''}</button>
    {error ? errorMessage : null}
  </div>
);

SubmitButton.propTypes = {
  pending: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(
    state => state.submitbutton,
    dispatch => ({
      onClick: () => dispatch(submit()),
    }),
)(SubmitButton);
