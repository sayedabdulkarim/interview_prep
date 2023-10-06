import React, { useEffect, useState } from "react";

const useCountdownTimer = (timeDuration, cb) => {
  const [timer, setTimer] = useState(timeDuration);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prev) => timeDuration - prev);
    }, timeDuration);
  }, []);

  return <div></div>;
};

export default useCountdownTimer;
