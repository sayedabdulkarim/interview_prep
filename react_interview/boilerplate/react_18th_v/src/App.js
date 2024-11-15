import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(2);

  const timer = useCallback(() => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0) {
      if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      }
    }
  }, [minutes, seconds]);

  useEffect(() => {
    const handleTimer = setInterval(() => {
      timer();
    }, 1000);

    return () => clearInterval(handleTimer);
  }, [timer]);

  return (
    <div>
      <h1>
        {seconds} : {minutes}
      </h1>
    </div>
  );
};

export default App;
