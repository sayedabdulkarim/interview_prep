import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const handleTimer = (sec, min, hour) => {
    if (sec > 0) {
      setSeconds((prev) => prev - 1);
    } else if (sec === 0 && min >= 1) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (sec === 0 && min === 0 && hour === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  useEffect(() => {
    if (isStart) {
      let startTimer = setInterval(() => {
        handleTimer(seconds, minutes, hours);
      }, 1000);
      return () => clearInterval(startTimer);
    }
  }, [hours, isStart, minutes, seconds]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
