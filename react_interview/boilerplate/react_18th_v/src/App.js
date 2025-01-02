import React, { useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(10);
  const [minutes, setMinutes] = React.useState(10);
  const [hours, setHours] = React.useState(1);
  const [isStart, setIsStart] = React.useState(false);

  const timer = () => {
    if (seconds >= 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes >= 0) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(59);
      setMinutes(59);
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleTimer = timer();

    setInterval(handleTimer, 1000);

    return () => {
      clearInterval(handleTimer);
    };
  });

  return (
    <div>
      <h1>Timer</h1>
      <h2>
        {hours} : {minutes} : {seconds}
      </h2>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
