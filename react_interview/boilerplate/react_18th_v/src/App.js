import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(1);
  const [hours, setHours] = useState(2);
  const [toggleTimer, setToggleTimer] = useState(false);

  const timer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0) {
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
    if (toggleTimer) {
      const handleTimer = setInterval(() => {
        timer();
      }, 1000);

      return () => clearInterval(handleTimer);
    }
  });

  return (
    <div>
      <button onClick={() => setToggleTimer((prev) => !prev)}>
        Toggle {toggleTimer ? "started" : "paused"}
      </button>
      <h1>
        {hours}: {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default App;
