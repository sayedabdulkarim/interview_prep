import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(2);
  const [isStart, setIsStart] = useState(false);
  //
  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes > 0) {
      setSeconds(10);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(10);
      setMinutes(10);
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        handleTimer();
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  return (
    <div>
      <h1>
        {hours} : {minutes} : {seconds}
      </h1>
      <button onClick={() => setIsStart((prev) => !prev)}>TOGGLE</button>
    </div>
  );
};

export default App;
