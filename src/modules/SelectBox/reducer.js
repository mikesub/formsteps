import A from './types.js';

const initialState = {
  items: ['C1', 'C2', 'C3'],
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.SELECTBOX_SELECTED: {
      return {
        selected: action.payload || '',
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
