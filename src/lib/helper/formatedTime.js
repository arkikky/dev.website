import dayjs from "dayjs";

export const formatTimeTo12Hour = (day, timeString) => {
  if (day === "day1") {
    const date = `2024-08-22 ${timeString}`;

    return dayjs(date, "Asia/Makassar").format("h:mm A");
  }

  if (day === "day2") {
    const date = `2024-08-23 ${timeString}`;

    return dayjs(date, "Asia/Makassar").format("h:mm A");
  }
};
