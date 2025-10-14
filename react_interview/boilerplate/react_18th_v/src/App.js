import React from "react";
import { useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(10);
  const [minutes, setMinutes] = React.useState(1);
  const [hours, setHours] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const createTimer = (sec, min, hours) => {
    if (sec > 0) {
      setSeconds((prev) => prev - 1);
    } else if (sec === 0 && min >= 1) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (sec === 0 && min === 0 && hours === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (isStart) {
        createTimer(seconds, minutes, hours);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart, seconds, minutes, hours]);

  return (
    <div>
      <h1>Hello World!</h1>
      <strong>{`${hours}:${minutes}:${seconds}`}</strong>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
