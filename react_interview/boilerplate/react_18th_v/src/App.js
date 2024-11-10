import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);

  const handleTimer = useCallback(() => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0) {
      if (minutes > 0) {
        setSeconds(59);
        setMinutes((prev) => prev - 1);
      }
    }
  }, [minutes, seconds]);

  useEffect(() => {
    let timer = setInterval(() => {
      handleTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, handleTimer]);

  return (
    <div>
      Seconds - {seconds} : Minutes - {minutes}
    </div>
  );
};

export default App;
