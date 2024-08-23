export const convertToBaliTime = (utcTime) => {
  // Parse the UTC timestamp
  var date = new Date(utcTime);

  // Convert the UTC date to Bali time (UTC+8)
  var baliOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
  var baliTime = new Date(date.getTime() + baliOffset);

  // Extract hours and determine AM or PM
  var hours = baliTime.getUTCHours();
  var minutes = baliTime.getUTCMinutes();
  var period = hours >= 12 ? "PM" : "AM";

  // Adjust hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set to 12 (midnight or noon)

  // Format minutes to always be two digits
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Return the formatted time in Bali with AM/PM
  return hours + ":" + minutes + " " + period;
};
