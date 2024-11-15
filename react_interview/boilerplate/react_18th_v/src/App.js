import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(1);

  const timer = useCallback(() => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes >= 1) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    }
    // else if (seconds === 0 && minutes === 0 && hours === 0) {
    //   setSeconds(0);
    //   setMinutes(0);
    //   setHours(0);
    // } else {
    //   setHours((prev) => prev - 1);
    //   setSeconds(59);
    //   setMinutes(59);
    // }
  }, [minutes, seconds, hours]);

  useEffect(() => {
    const handleTimer = setInterval(() => {
      timer();
    }, 1000);

    return () => clearInterval(handleTimer);
  }, [timer]);

  return (
    <div>
      <h1>
        {hours} : {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default App;
