import React, { memo } from "react";

const ChildOne = ({ count, handleCount }) => {
  console.log("child oneeee");
  return (
    <div>
      <h1>Child One : {count}</h1>
      <button onClick={handleCount}>handleCount</button>
    </div>
  );
};

export default memo(ChildOne);
