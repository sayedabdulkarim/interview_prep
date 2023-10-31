import React, { memo } from "react";

const ChildOne = ({ count, handleCount }) => {
  console.log("Calling from child One ");
  return (
    <div>
      <h1>ChildOne: {count}</h1>
      <button onClick={handleCount}>handleCount</button>
    </div>
  );
};

export default memo(ChildOne);
