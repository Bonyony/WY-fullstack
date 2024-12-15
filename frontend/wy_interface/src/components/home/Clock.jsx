import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerID); // Clean up the interval on component unmount
  }, []);
  return (
    <h3 className="text-md text-center font-black mb-2">
      It is {date.toLocaleTimeString()}. Earth time.
    </h3>
  );
};

export default Clock;
