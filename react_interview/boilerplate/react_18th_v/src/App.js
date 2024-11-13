import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(4);
  const [hours, setHours] = useState(1);

  //
  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes >= 1) {
      setSeconds(5);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(5);
      setMinutes(5);
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleTimer();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>
        {hours} : {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default App;
