import React, { useCallback, useEffect } from "react";

const App = () => {
  const [isStart, setIsStart] = React.useState(false);
  const [second, setSecond] = React.useState(10);
  const [minute, setMinute] = React.useState(1);
  const [hour, setHour] = React.useState(0);

  const handleTimer = useCallback(() => {
    if (second > 0) {
      setSecond((prev) => prev - 1);
    } else if (second === 0 && minute >= 1) {
      setSecond(59);
      setMinute((prev) => prev - 1);
    } else if (second === 0 && minute === 0 && hour === 0) {
      setHour(0);
      setMinute(0);
      setSecond(0);
    } else {
      setHour((prev) => prev - 1);
      setMinute(59);
      setSecond(59);
    }
  }, [second, minute, hour]);

  useEffect(() => {
    if (isStart) {
      let timerId = setInterval(() => {
        handleTimer();
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isStart, second, minute, hour, handleTimer]);

  return (
    <div>
      <h1>Timer</h1>
      <p>
        {hour}:{minute}:{second}
        <button onClick={() => setIsStart(!isStart)}>
          {isStart ? "Stop" : "Start"}
        </button>
      </p>
    </div>
  );
};

export default App;
