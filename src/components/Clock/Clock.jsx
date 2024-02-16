import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatTime = (time) => {
    let hours = time.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0:00)
    return `${hours}:${formatDigits(time.getMinutes())}:${formatDigits(time.getSeconds())} ${ampm}`;
  };

  const formatDigits = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <h2 className=' text-sm'>{formatTime(time)}</h2>
    </div>
  );
};

export default Clock;
