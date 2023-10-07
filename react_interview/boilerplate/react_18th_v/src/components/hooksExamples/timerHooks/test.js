import React, { useEffect, useState } from "react";

const Test = ({ timeLimit = 10 }) => {
  const [timer, setTimer] = useState(timeLimit);

  //   useEffect(() => {
  //     let myInterval = setInterval(() => {
  //       setTimer((prev) => prev - 1);
  //     }, 1000);

  //     if (timer === 0) clearInterval(myInterval);

  //     console.log("calleddd");
  //     return () => clearInterval(myInterval);
  //   });

  useEffect(() => {
    let myInterval;

    if (timer > 0) {
      myInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(myInterval);
    }

    return () => clearInterval(myInterval);
  }, [timer]); // Depend on timer so it re-runs when timer changes

  return (
    <div>
      <h1>Timer</h1>
      {timer === 0 ? "Times Up" : timer}
    </div>
  );
};

export default Test;
