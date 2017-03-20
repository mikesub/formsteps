import steps from './modules/Steps/reactions.js';

const reactions = [
  steps,
];

export default store => nextDispatch => (action) => {
  nextDispatch(action);
  reactions.forEach(reaction => reaction(action.type, store.dispatch));
};
