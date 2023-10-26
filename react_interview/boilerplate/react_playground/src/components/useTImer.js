import { useEffect, useState } from "react";

export const useTimer = (initialSeconds = 0, initialMinutes = 0) => {
  //
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);

  //
  // const handleTimer = setInterval(() => {
  //   const timer = () => {
  //     if (seconds > 0) {
  //       setSeconds((prev) => prev - 1);
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(timer);
  //       } else {
  //         setSeconds(59);
  //         setMinutes((prev) => prev - 1);
  //       }
  //     }
  //   };
  //   return timer;
  // }, 1000);

  const handleTimer = () => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        }
      }
    }, 1000);

    return timer;
  };

  //
  useEffect(() => {
    const timer = handleTimer();

    return () => clearInterval(timer);
  });

  return [seconds, minutes];
};
