import dayjs from "dayjs";
var utc = require("dayjs/plugin/utc");
var tz = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(tz);

export const formatTimeTo12Hour = (day, timeString) => {
  if (day === "day1") {
    const date = `2024-08-22 ${timeString}`;

    return dayjs.tz(date, "Asia/Makassar").format("h:mm A");
  }

  if (day === "day2") {
    const date = `2024-08-23 ${timeString}`;

    return dayjs.tz(date, "Asia/Makassar").format("h:mm A");
  }
};
