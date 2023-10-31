import React, { useCallback, useMemo, useState } from "react";

import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const handleName = () => {
    setName(Math.random());
  };

  // const handleCount = () => {
  //   setCount((prev) => prev + 1);
  // };

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //memo

  const getMax = useMemo(() => {
    const arr = [3, 2, 4, 1, 22, 5, 71, 32, 43, 44];
    console.log("get max Calleddd");
    return Math.max(...arr);
  }, []);

  console.log("calling from parent ");
  return (
    <div>
      <h1>Parent: {name}</h1>

      {/* <h1>Memo: {getMax()}</h1> */}
      <h1>Memo: {getMax}</h1>

      <button onClick={handleName}>Change Name</button>
      <hr />
      <hr />
      <hr />

      <ChildOne count={count} handleCount={handleCount} />
      <ChildTwo />
    </div>
  );
};

export default Parent;
