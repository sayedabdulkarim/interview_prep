import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(2);

  //
  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0 && minutes > 0) {
      setSeconds(10);
      setMinutes((prev) => prev - 1);
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
