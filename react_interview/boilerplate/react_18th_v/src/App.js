import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(1);

  const timer = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0) {
      setSeconds(10);
      setMinutes((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleTimer = setInterval(() => {
      timer();
    }, 1000);

    return () => clearInterval(handleTimer);
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
