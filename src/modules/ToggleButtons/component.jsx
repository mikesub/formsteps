import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import handle from './actions';

const ToggleButtons = ({ items, selected, onClick }) => (
  <div>
    {items.map(i => (
      <button key={i} onClick={onClick} id={i}>{i}{i === selected ? ' on' : ' off'}</button>
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
