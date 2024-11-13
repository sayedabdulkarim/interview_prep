import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);

  //
  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0) {
      if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleTimer();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>
        {seconds} : {minutes}
      </h1>
    </div>
  );
};

export default App;
