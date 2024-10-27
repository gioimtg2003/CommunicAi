export const getKey = (...args: (string | number)[]) => {
  return args.join('-');
};
