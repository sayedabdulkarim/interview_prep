import React, { useEffect, useState } from "react";

const App = () => {
  //state
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isStart, setIsStart] = useState(false);
  //func
  const handleStart = (val) => {
    setIsStart(val);
  };

  const timer = (sec, min, hour) => {
    if (sec > 0) {
      setMinutes((prev) => prev - 1);
    } else if (sec === 0 && min >= 1) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
      setHours((prev) => prev - 1);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  //async
  useEffect(() => {
    if (isStart) {
      let isTimer = setInterval(() => {
        timer(seconds, minutes, hours);
      }, 1000);
      return () => clearInterval(isTimer);
    }
  }, [isStart, seconds, minutes, hours]);

  console.log({
    hours: typeof hours,
    minutes: typeof minutes,
    seconds: typeof seconds,
  });
  return (
    <div>
      {!isStart ? (
        <div>
          <input
            type="number"
            placeholder="Enter Hour"
            onChange={(e) => setHours(+e.target.value)}
          />
          <hr />
          <input
            type="number"
            placeholder="Enter Minutes"
            onChange={(e) => setMinutes(+e.target.value)}
          />
          <hr />
          <input
            type="number"
            placeholder="Enter Seconds"
            onChange={(e) => setSeconds(+e.target.value)}
          />
          <hr />
          <hr />
          <button onClick={() => handleStart(true)}>Start</button>
        </div>
      ) : (
        <>
          <h2>Hour: {hours}</h2>
          <h2>Minutes: {minutes}</h2>
          <h2>Seconds: {seconds}</h2>
          <button onClick={() => console.log("pause")}>Pause</button>
          <button onClick={() => handleStart(false)}>Stop</button>
        </>
      )}
    </div>
  );
};

export default App;
