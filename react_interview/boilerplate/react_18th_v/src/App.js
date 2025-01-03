import React, { useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [isStart, setIsStart] = React.useState(false);

  const timer = () => {
    if (seconds >= 0) {
      setSeconds((prev) => prev + 1);
    } else if (minutes >= 0) {
      setSeconds((prev) => prev + 1);
      setMinutes((prev) => prev + 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(59);
      setMinutes(59);
      setHours((prev) => prev - 1);
    }
  };

  useEffect(() => {});

  return <div>App</div>;
};

export default App;
