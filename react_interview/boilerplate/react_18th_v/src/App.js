import React, { useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(10);
  const [minutes, setMinutes] = React.useState(1);
  const [hours, setHours] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes >= 1) {
      // } else if (minutes > 0) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (isStart) {
        handleTimer();
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>
        Stopwatch - {hours}:{minutes}:{seconds}
      </h1>
      <div></div>
      <button onClick={() => setIsStart((prev) => !prev)}>
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
