import React, { memo } from "react";

const ChildOne = ({ count, handleCount }) => {
  console.log("Chid One ");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleCount()}>handleCount</button>
    </div>
  );
};

export default memo(ChildOne);
