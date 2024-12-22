import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(1);

  function test(arr1, arr2) {
    const mergeArr = [];

    for (let i = 0; i < arr1.length; i++) {
      mergeArr.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
      mergeArr.push(arr2[i]);
    }

    const filterUni = [];

    for (let i = 0; i < mergeArr.length; i++) {
      if (filterUni.indexOf(mergeArr[i]) === -1) {
        filterUni.push(mergeArr[i]);
      }
    }

    //sort
    for (let i = 0; i < filterUni.length; i++) {
      for (let j = i + 1; j < filterUni.length; j++) {
        if (filterUni[i] > filterUni[j]) {
          const temp = filterUni[i];
          filterUni[i] = filterUni[j];
          filterUni[j] = temp;
        }
      }
    }

    return { mergeArr, filterUni };
  }

  //
  const handleTimer = useCallback(() => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else if (minutes > 0) {
      setSeconds(59);
      setMinutes((prev) => prev - 1);
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    } else {
      setSeconds(59);
      setMinutes(59);
      setHours((prev) => prev - 1);
    }
  }, [hours, minutes, seconds]);

  useEffect(() => {
    const timer = setInterval(handleTimer, 1000);

    return () => clearInterval(timer);
  }, [handleTimer]);

  return (
    <div>
      <button>TOGGLE</button>
      <h1>
        {seconds} : {minutes} : {hours}
      </h1>
    </div>
  );
};

export default App;
