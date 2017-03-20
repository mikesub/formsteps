import stepsReaction from './modules/Steps/reactions.js';

// TODO: make it more generic: each module can "subscribe" on ACTIONS he wants to react on

export default store => nextDispatch => (action) => {
  nextDispatch(action);
  stepsReaction(action, store);
};
