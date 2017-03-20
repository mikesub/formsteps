import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import handle from './actions';
import css from './index.css';

const SelectBox = ({ items, selected, onChange }) => (
  <div className={css.wrap}>
    <select value={selected} onChange={onChange}>
      <option>...</option>
      {items.map(i => <option key={i} value={i}>{i}</option>)}
    </select>
    <div className={css.label}>
      Select your C
    </div>
  </div>
);

SelectBox.defaultProps = {
  selected: '',
};

SelectBox.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(
    state => state.selectbox,
    dispatch => ({
      onChange: event => dispatch(handle(event.target.value === '...' ? null : event.target.value)),
    }),
)(SelectBox);
