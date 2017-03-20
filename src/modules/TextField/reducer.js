import A from './types.js';

const initialState = {
  value: '',
  validated: false,
  error: false,
  pending: false,
  errorMessage: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case A.TEXTFIELD_CHANGED: {
      return {
        value: action.payload,
        validated: false,
        error: false,
        pending: false,
        errorMessage: '',
      };
    }
    case A.TEXTFIELD_CHECKED: {
      return {
        error: Boolean(action.error),
        errorMessage: action.error ? action.payload.message : '',
        pending: action.pending,
        validated: !action.error,
      };
    }
    default:
      return null;
  }
};

export default { reducer, initialState };
