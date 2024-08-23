import { convertToBaliTime } from "@lib/helper/convertToBaliTime";

export const formatTimeTo12Hour = (day, timeString) => {
  if (day === "day1") {
    const date = `2024-08-22T${timeString}`;

    return convertToBaliTime(date);
  }

  if (day === "day2") {
    const date = `2024-08-23T${timeString}`;

    return convertToBaliTime(date);
  }
};
