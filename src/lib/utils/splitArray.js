const getExplode = (delimiter, inputString) => {
  return inputString.split(delimiter);
};

const getImplode = (glue, inputArray) => {
  return inputArray.join(glue);
};
