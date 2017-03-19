export default (...args) =>
  args.reduce(
    (accumulator, item) => ({ ...accumulator, [item]: item }),
    {},
  );
