import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reactions from './reactions.js';
import reducer from './reducer.js';

const logger = createLogger({ collapsed: true, duration: true, colors: false });

export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger,
    reactions,
  ),
);
