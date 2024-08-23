export const convertToBaliTime24 = (utcTime) => {
  const date = new Date(utcTime);

  const baliTime = new Date(date.getTime() + 8 * 60 * 60 * 1000);

  let hours = baliTime.getUTCHours();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours} ${ampm}`;
};
