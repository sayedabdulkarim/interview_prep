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

  ///
  const timerFunc = (seconds, minutes, hours) => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes >= 1) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setHours((prev) => prev - 1);
      setSeconds(59);
      setMinutes(59);
    }
  };

  //async
  useEffect(() => {
    let timer = setInterval(() => {
      if (isStart) {
        timerFunc(seconds, minutes, hours);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, isStart]);

  return (
    <div>
      {!isStart ? (
        <div>
          <input
            type="number"
            placeholder="Enter Second"
            name={"seconds"}
            onChange={(e) => setSeconds(e.target.value)}
            value={seconds}
          />
          <hr />
          <input
            type="number"
            placeholder="Enter Minute"
            name={"minutes"}
            onChange={(e) => setMinutes(e.target.value)}
            value={minutes}
          />
          <hr />
          <input
            type="number"
            placeholder="Enter Hours"
            name={"hours"}
            onChange={(e) => setHours(e.target.value)}
            value={hours}
          />
          <hr />
          <button onClick={() => handleStart(true)}>Start</button>
        </div>
      ) : (
        <>
          <hr />
          <hr />
          <h1>
            Hours: {hours} / Minutes: {minutes} / Seconds: {seconds}
          </h1>
          <button>Pause</button>
          <button onClick={() => handleStart(false)}>Stop</button>
        </>
      )}
    </div>
  );
};

export default App;
