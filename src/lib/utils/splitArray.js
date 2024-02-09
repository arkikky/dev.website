export const getExplode = (delimiter, inputString) => {
  return inputString.split(delimiter);
};

export const getImplode = (glue, inputArray) => {
  return inputArray.join(glue);
};

export const setJoinString = (delimiter, delimiterJoin, data) => {
  const rsArr = getExplode(delimiter, data);
  const rs = getImplode(delimiterJoin, rsArr);

  return rs;
};
