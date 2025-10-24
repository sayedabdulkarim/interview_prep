import React, { memo } from "react";

const ChildOne = ({ count, handleCount }) => {
  console.log("ChildOne Rendered");
  return (
    <div>
      ChildOne
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default memo(ChildOne);
