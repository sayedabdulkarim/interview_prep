import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(12);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(1);
  const [isStart, setIsStart] = useState(false);

  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0) {
      setSeconds(5);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(5);
      setMinutes(5);
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isStart) {
      const timer = setInterval(handleTimer, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div>
      <h1>
        {hours} : {minutes} : {seconds}
        <br />
        <br />
        <button onClick={() => setIsStart((prev) => !prev)}>Toggle</button>
      </h1>
    </div>
  );
};

export default App;
