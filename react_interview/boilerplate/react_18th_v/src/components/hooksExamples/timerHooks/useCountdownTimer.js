import React, { useEffect, useState } from "react";

//hook
const useTimer = (initialMinute = 1, initialSeconds = 0) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  function handleTimer() {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return myInterval;
  }

  useEffect(() => {
    const myInterval = handleTimer();

    return () => {
      clearInterval(myInterval);
    };
  });

  return { minutes, seconds };
};

//Comp
const TimerComponent = () => {
  const { minutes, seconds } = useTimer(2, 0);

  return (
    <div>
      <h1>Hello Timer</h1>

      {!minutes && !seconds ? (
        <strong>Times UP !</strong>
      ) : (
        <h2>{`${minutes} : ${seconds}`}</h2>
      )}
    </div>
  );
};

export default TimerComponent;
