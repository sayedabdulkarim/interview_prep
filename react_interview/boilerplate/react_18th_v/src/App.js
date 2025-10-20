import React, { useCallback, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(10);
  const [minutes, setMinutes] = React.useState(1);
  const [hours, setHours] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes >= 1) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  // const handleTimer = useCallback(() => {
  //   if (seconds > 0) {
  //     setSeconds((prev) => prev - 1);
  //   } else if (seconds === 0 && minutes >= 1) {
  //     setMinutes((prev) => prev - 1);
  //     setSeconds(59);
  //   } else if (seconds === 0 && minutes === 0 && hours === 0) {
  //     setHours(0);
  //     setMinutes(0);
  //     setSeconds(0);
  //   } else {
  //     setHours((prev) => prev - 1);
  //     setMinutes(59);
  //     setSeconds(59);
  //   }
  // }, [seconds, minutes, hours]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (isStart) {
        handleTimer();
      }
    }, 1000);
    return () => clearInterval(timerId);
  });

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
