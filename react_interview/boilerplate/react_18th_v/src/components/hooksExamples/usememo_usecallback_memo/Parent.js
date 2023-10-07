import React, { useCallback, useMemo, useState } from "react";

//comp
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

const Parent = () => {
  //state
  const [counter, setCounter] = useState(0);
  const [showName, setShowName] = useState(false);

  //func
  const handleName = () => {
    setShowName(Math.random());
  };

  const handleCounter = useCallback(() => {
    setCounter(Math.random);
  }, []);

  //   const handleCounter = () => {
  //     setCounter(Math.random());
  //   };

  //////////////////////////////////////////////////////////////////

  //memo check
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [someOtherState, setSomeOtherState] = useState("");

  // Use useMemo to find the maximum number
  const maxNumber = useMemo(() => {
    console.log("Calculating max number...");
    return Math.max(...numbers);
  }, [numbers]);
  //   const maxNumber = () => {
  //     console.log("Calculating max number...");
  //     return Math.max(...numbers);
  //   };

  return (
    <div>
      <h1>Name: {showName}</h1>
      <button onClick={() => handleName()}>handleName</button>

      <hr />
      <ChildOne counter={counter} handleCounter={handleCounter} />
      <ChildTwo />

      <hr />
      <hr />
      <hr />
      {/* MEMO */}
      <>
        {/* <h1>Max Number: {maxNumber()}</h1> */}
        <h1>Max Number: {maxNumber}</h1>
        {/* 
        the maximum number is only recalculated when the numbers array changes. This means that clicking the "Change Other State" button won't trigger a recalculation, */}

        {JSON.stringify(numbers, null, 4)}
        <button
          onClick={() =>
            setNumbers([...numbers, Math.floor(Math.random() * 10)])
          }
        >
          Add Random Number
        </button>

        <button onClick={() => setSomeOtherState(Math.random().toString())}>
          Change Other State
        </button>
      </>
      {/* MEMO END */}
    </div>
  );
};

export default Parent;
