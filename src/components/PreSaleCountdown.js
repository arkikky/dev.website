import React, { useState, useEffect } from 'react';
import { deleteCookie } from 'cookies-next';

// @lib/controller & helper
import { calculateCountdown } from '@lib/helper/Configuration';

const PreSaleCountdown = () => {
  const [isCountdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // @countdown(date)
  useEffect(() => {
    deleteCookie('prSle_trgtSession');
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
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
