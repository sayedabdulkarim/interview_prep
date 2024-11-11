import React, { useEffect, useState } from "react";

const App = () => {
  //state
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);

  //method

  const timer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (seconds === 0) {
      if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      }
    }
  };

  //async
  useEffect(() => {
    let timerStart = setInterval(() => {
      timer();
    }, 1000);

    return () => clearInterval(timerStart);
  });

  return (
    <div>
      {seconds} : {minutes}
    </div>
  );
};

export default App;
