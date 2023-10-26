import React, { useCallback, useMemo, useState } from "react";

import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

const Parent = () => {
  const [name, setName] = useState("");

  const handleName = () => {
    setName(Math.random());
  };

  //callback
  const [count, setCount] = useState(0);
  //   const handleCount = () => {
  //     setCount((prev) => prev + 1);
  //   };
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //memo
  const arr = [2, 3, 1, 3, 5, 4, 22, 3, 1, 1, 5, 55, 4, 5, 2, 3, 6, 8, 9, 4];

  //   const getMax = () => {
  //     console.log("get max called ");
  //     return Math.max(...arr);
  //   };
  const getMax = useMemo(() => {
    console.log("get max called ");
    return Math.max(...arr);
  }, [arr]);

  console.log("caling from parent ");
  return (
    <div>
      <h1>Parent {name}</h1>
      {/* <button>Get Max {getMax()}</button> */}
      <button>Get Max {getMax}</button>
      <button onClick={() => handleName()}>handle Name </button>
      <hr />
      <hr />
      <ChildOne count={count} handleCount={handleCount} />
      <hr />
      <hr />
      <ChildTwo />
    </div>
  );
};

export default Parent;
