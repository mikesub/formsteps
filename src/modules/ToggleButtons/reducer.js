import A from './types.js';

const initialState = {
  items: ['B1', 'B2'],
  selected: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.TOGGLEBUTTONS_RESET: {
      return {
        selected: '',
      };
    }
    case A.TOGGLEBUTTONS_CLICKED: {
      return {
        selected: action.payload,
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
