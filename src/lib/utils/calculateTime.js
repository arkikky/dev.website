const calculateTime = (trgtDate) => {
  const now = new Date();
  const diffrnce = trgtDate - now;

  if (diffrnce <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diffrnce / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffrnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffrnce % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffrnce % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default calculateTime;
