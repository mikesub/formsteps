import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cs from 'classnames';
import handle from './actions';
import css from './index.css';

const ToggleButtons = ({ items, selected, onClick }) => (
  <div className={css.wrap}>
    {items.map(i => (
      <button
        key={i}
        id={i}
        onClick={onClick}
        className={cs(css.button, { [css.selected]: i === selected })}
      >
        {i}
      </button>
    ))}
  </div>
);

ToggleButtons.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(
    state => state.togglebuttons,
    dispatch => ({
      onClick: event => dispatch(handle(event.target.id)),
    }),
)(ToggleButtons);
