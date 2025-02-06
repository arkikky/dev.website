import React, { useState, useEffect } from 'react';

// @lib/controller & helper
import { calculateCountdown } from '@lib/helper/Configuration';

const PreSaleCountdown = ({ date = '2025-03-31T12:00:00' }) => {
  const [isCountdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // @countdown(Date)
  const setDate = new Date(date)?.getTime();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(setDate));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {`${isCountdown?.days}D : ${isCountdown?.hours}H : ${isCountdown?.minutes}M : ${isCountdown?.seconds}S`}
    </>
  );
};

export default PreSaleCountdown;
