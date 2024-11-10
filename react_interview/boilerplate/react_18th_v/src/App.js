import React, { useEffect, useState } from "react";

///counter
const useTiemr = (sec, min) => {
  const [seconds, setSeconds] = useState(sec);
  const [minutes, setMinutes] = useState(min);

  function handleTimer() {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return myInterval;
  }

  useEffect(() => {
    const myInterval = handleTimer();

    return () => clearInterval(myInterval);
  });

  return [seconds, minutes];
};

const App = () => {
  const [seconds, minutes] = useTiemr(10, 1);
  return (
    <div>
      <h1>
        {seconds} - {minutes}
      </h1>
    </div>
  );
};

export default App;
