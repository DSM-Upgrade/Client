export const areEqual = (origin, compare) => {
  return JSON.stringify(origin) === JSON.stringify(compare);
};

export const parameterIsEmpty = (parameter) => {
  return parameter === "";
};
