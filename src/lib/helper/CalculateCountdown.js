const calculateCountdown = (date) => {
  const mrgdDate = Math.max(0, date - new Date());

  const toTimeUnits = (unit) =>
    Math.floor(mrgdDate / unit) %
    (unit === 1000 * 60 * 60 * 24 ? Infinity : 24);

  return {
    days: toTimeUnits(1000 * 60 * 60 * 24),
    hours: toTimeUnits(1000 * 60 * 60),
    minutes: toTimeUnits(1000 * 60),
    seconds: toTimeUnits(1000),
  };
};

export default calculateCountdown;
