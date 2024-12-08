import React, { memo, useCallback, useMemo, useState } from "react";

const Parent = () => {
  const [toggleParent, setToggleParent] = useState(false);
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([2, 1, 202, 12, 34, 234, 234, 11, 1]);
  ///

  // const maxVal = () => {
  //   console.log("called maxVal");
  //   return Math.max([...arr]);
  // };

  const maxVal = useMemo(() => {
    console.log("called maxVal");
    return Math.max([...arr]);
  }, [arr]);

  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const pushRandom = () => {
    const num = Math.random();
    setArr([...arr, num]);
  };

  console.log("parent renders");
  return (
    <div>
      <h1>Parent - {maxVal}</h1>
      <button onClick={() => setToggleParent((prev) => !prev)}>
        Parent Toggle : {toggleParent ? "true" : "false"}
      </button>
      <button onClick={pushRandom}>PUSH TO MAX</button>
      <pre>{JSON.stringify(arr, null, 2)}</pre>

      <ChildOne counter={counter} handleCounter={handleCounter} />
      <ChildTwo />
    </div>
  );
};

const ChildOne = memo(({ counter, handleCounter }) => {
  console.log(" render child one");
  return (
    <div>
      <h1>ChildOne : {counter}</h1>
      <button onClick={handleCounter}>handleCounter</button>
    </div>
  );
});

const ChildTwo = memo(() => {
  console.log(" render child two");
  return <div>ChildTwo</div>;
});

export default Parent;
