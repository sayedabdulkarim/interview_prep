import React, { memo } from "react";

const ChildOne = ({ count, handleCounter }) => {
  console.log("child Oneee");
  return (
    <div>
      <h1>ChildOne : {count}</h1>
      <button onClick={handleCounter}>handleCounter</button>
    </div>
  );
};

export default memo(ChildOne);
