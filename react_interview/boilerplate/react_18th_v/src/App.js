import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const App = () => {
  const [second, setSecond] = React.useState(10);
  const [minute, setMinute] = React.useState(1);
  const [hour, setHour] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const handleTimer = useCallback(() => {
    if (second > 0) {
      setSecond((prev) => prev - 1);
    } else if (second === 0 && minute > 0) {
      setSecond(59);
      setMinute((prev) => prev - 1);
    } else if (second === 0 && minute === 0 && hour === 0) {
      setSecond(0);
      setMinute(0);
      setHour(0);
    } else if (second === 0 && minute === 0 && hour > 0) {
      setSecond(59);
      setMinute(59);
      setHour((prev) => prev - 1);
    }
  }, [second, minute, hour]);

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        handleTimer();
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStart, second, minute, hour, handleTimer]);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        {hour}:{minute}:{second}
      </div>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
