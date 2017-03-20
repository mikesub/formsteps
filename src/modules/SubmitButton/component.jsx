import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import submit from './actions';
import css from './index.css';

const Message = ({ text }) => (text ? <div className={css.message}>{text}</div> : null);
Message.propTypes = {
  text: PropTypes.string.isRequired,
};

const buttonText = (pending, error) => {
  if (pending) {
    return 'Submitting...';
  }
  if (error) {
    return 'Try Again';
  }
  return 'Submit';
};

const SubmitButton = ({ pending, error, errorMessage, onClick }) => (
  <div className={css.wrap}>
    <button onClick={onClick} disabled={pending} className={css.button}>
      {buttonText(pending, error)}
    </button>
    <Message text={error ? errorMessage : ''} />
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
