import React, { memo, useCallback, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [parentToggle, setParentToggle] = useState(false);
  //
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log(" render Parent");

  return (
    <div>
      <h1>Parent</h1>
      <h3>{parentToggle ? "parent toggle true" : "parent toggle false "} </h3>
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
