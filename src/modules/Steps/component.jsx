import take from 'lodash/take';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Steps = ({ children, value }) => (
  <div>
    {take(React.Children.toArray(children), value)}
  </div>
);

Steps.propTypes = {
  children: PropTypes.arrayOf(React.PropTypes.element).isRequired,
  value: PropTypes.number.isRequired,
};


export default connect(state => state.steps)(Steps);
