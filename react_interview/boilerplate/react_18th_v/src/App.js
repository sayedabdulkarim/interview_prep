import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(1);

  //
  const handleTimer = useCallback(() => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0) {
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
  }, [hours, minutes, seconds]);

  useEffect(() => {
    const timer = setInterval(handleTimer, 1000);

    return () => clearInterval(timer);
  }, [handleTimer]);

  return (
    <div>
      <button>TOGGLE</button>
      <h1>
        {seconds} : {minutes} : {hours}
      </h1>
    </div>
  );
};

export default App;
