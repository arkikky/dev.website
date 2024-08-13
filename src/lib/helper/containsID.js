export const containsID = (str) => {
  // Periksa apakah string valid
  if (!str) {
    return false;
  }

  // Periksa apakah string mengandung "ID"
  if (str.includes("I D")) {
    return true;
  } else {
    return false;
  }
};

export const replaceIDWithText = (str) => {
  // Periksa apakah string valid
  if (!str) {
    return "";
  }

  // Ganti semua kemunculan "I D" dengan "text"
  let result = str.replace(/I D/g, "🇮🇩");
  return result;
};
