import React, { useCallback, useMemo, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const ParentComp = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const [arr, setArr] = useState([
    1, 2, 3, 5, 56, 7, 8, 9, 0, 0, 0, -9, 3, 56, 7, 7, 89, 78,
  ]);

  //
  //   const handleCounter = () => {
  //     setCount((prev) => prev + 1);
  //   };
  const handleCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //   const getLargestnum = useMemo(() => {
  //     console.log("parentttt with MEmo");
  //     return Math.max(...arr);
  //   }, [arr]);

  const getLargestnum = () => {
    console.log("parentttt with MEmo");
    return Math.max(...arr);
  };

  console.log("parenttt");
  return (
    <div>
      <button onClick={() => setName(Math.random())}>Parent - {name}</button>

      <ChildOne count={count} handleCounter={handleCounter} />
      <hr />
      <hr />
      <hr />
      <ChildTwo />
      <hr />
      <hr />
      {/* <h2>{getLargestnum}</h2> */}
      <h2>{getLargestnum()}</h2>
    </div>
  );
};

export default ParentComp;
