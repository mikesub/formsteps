export default (dispatch, type, promise) => {
  dispatch({ type, pending: true });
  promise
    .then(payload => dispatch({ type, payload, pending: false }))
    .catch(payload => dispatch({ type, payload, pending: false, error: true }));
};
