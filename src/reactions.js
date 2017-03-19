import stepsReaction from './modules/Steps/reactions.js';

export default store => nextDispatch => (action) => {
  nextDispatch(action);
  stepsReaction(action, store);
};
