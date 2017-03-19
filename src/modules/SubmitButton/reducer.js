import A from './types.js';

const initialState = {
  pending: false,
  error: false,
  errorMessage: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.SUBMITBUTTON_CLICKED: {
      return {
        error: Boolean(action.error),
        errorMessage: action.error ? action.payload.message : '',
        pending: action.pending,
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
