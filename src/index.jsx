/* eslint import/first: 0 */
document.getElementById('initing').innerHTML = 'Initializing...';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './modules/Root/component.jsx';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('mount'),
);
