import React, { memo } from "react";

const ChildOne = ({ count, handleCount }) => {
  console.log("calling from child One");

  return (
    <div>
      <h1>ChildOne : {count}</h1>
      <button onClick={handleCount}>Click</button>
    </div>
  );
};

export default memo(ChildOne);
