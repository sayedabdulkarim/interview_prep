import React, { useCallback, useEffect, useState } from "react";

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

//second Way

const SecondWay = () => {
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

  //this way we can handle for pause as well, same logic
  // const handleTimer = () => {
  //   if (seconds > 0) {
  //     setSeconds((prev) => prev - 1);
  //   } else if (seconds === 0 && minutes >= 1) {
  //     setMinutes((prev) => prev - 1);
  //     setSeconds(5);
  //   }
  // };

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
