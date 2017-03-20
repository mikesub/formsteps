import A from './types.js';

const initialState = {
  pending: false,
  error: false,
  errorMessage: '',
  result: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.SUBMITBUTTON_CLICKED: {
      return {
        error: Boolean(action.error),
        errorMessage: action.error ? action.payload.message : '',
        pending: action.pending,
        result: (action.error || action.pending) ? false : action.payload,
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
