const splitCamelCase = (str) => {
  if (!str) {
    return "";
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
      if (i !== 0) {
        result += " ";
      }
    }
    result += str[i];
  }

  return result;
};

export default splitCamelCase;
