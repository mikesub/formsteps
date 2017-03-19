import types from './types.js';

export default (action, store) => {
  if (action.type === types.STEPS_CALC) {
    return;
  }
  store.dispatch({ type: types.STEPS_CALC, payload: store.getState() });
};
