import A from './types.js';

const initialState = {
  A1: false,
  A2: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.CHECKBOXES_SELECTED: {
      return {
        [action.payload.label]: action.payload.value,
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
