import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cs from 'classnames';
import { handle, check } from './actions';
import css from './index.css';

const Message = ({ text }) => (text ? <div className={css.message}>{text}</div> : null);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

const TextField = ({ value, pending, validated, error, errorMessage, onChange, onClick }) => (
  <div className={css.wrap}>
    <input type="text" onChange={onChange} value={value} className={cs(css.input, {[css.error]: error }) } />
    <button onClick={onClick} disabled={pending || validated} className={css.button}>
      {pending ? 'Checking' : 'Check'}
    </button>
    <Message text={error ? errorMessage : ''} />
  </div>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  validated: PropTypes.bool.isRequired,
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
