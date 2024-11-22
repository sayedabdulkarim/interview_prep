import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(2);

  //
  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes > 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(10);
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
        {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default App;
