import React, { useCallback, useMemo, useState } from "react";

import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

const Parent = () => {
  //state
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([2, 3, 4, 6, 7, 8, 9, 0, 0]);

  // const largeNum = () => {
  //   console.log("largeNum called");
  //   return Math.max(...arr);
  // };
  const largeNum = useMemo(() => {
    console.log("largeNum called");
    return Math.max(...arr);
  }, [arr]);

  //func
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  //async
  console.log("parent");
  return (
    <div>
      <h1>Large Num : {largeNum}</h1>
      <h1>{name}</h1>
      <button onClick={() => setName(Math.random() * 100)}>handleNAme</button>
      <hr />
      <ChildOne count={count} handleCount={handleCount} />
      <ChildTwo />
    </div>
  );
};

export default Parent;
