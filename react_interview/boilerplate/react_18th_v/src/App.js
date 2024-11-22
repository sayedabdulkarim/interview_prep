import React, { memo, useCallback, useMemo, useState } from "react";

const Parent = () => {
  const arr = [3, 3, 4, 5, 21, 2, 42, 343, 424, 12, 3, 56, 7, 8, 8];
  const [count, setCount] = useState(0);
  const [parentToggle, setParentToggle] = useState(false);
  const [maxNum, setMaxNum] = useState(arr);
  //
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const getMax = useMemo(() => {
    console.log("getmax called");
    return Math.max(...maxNum);
  }, [maxNum]);

  console.log(" render Parent");

  return (
    <div>
      {/* <h1>Parent {getMax()}</h1> */}
      <h1>Parent {getMax}</h1>
      <h3>{parentToggle ? "parent toggle true" : "parent toggle false "} </h3>
      {JSON.stringify(maxNum, null, 2)}
      {/* <button onClick={() => setMaxNum(...maxNum, Math.round(Math.random))}> */}
      <button onClick={() => setMaxNum([...maxNum, Math.round(Math.random)])}>
        Push
      </button>
      <button onClick={() => setParentToggle((prev) => !prev)}>
        Parent toggle
      </button>
      <br />
      <br />
      <ChildOne count={count} handleCount={handleCount} />
      <br />
      <br />
      <ChildTwo />
    </div>
  );
};

const ChildOne = memo(({ count, handleCount }) => {
  console.log(" render child one ");
  return (
    <div>
      <h1>Child One - {count}</h1>
      <button onClick={handleCount}>Click</button>
    </div>
  );
});

const ChildTwo = memo(() => {
  console.log("render Child Two");
  return <h1>Child Two</h1>;
});

export default Parent;
