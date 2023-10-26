import React, { memo } from "react";

const ChildOne = ({ handleCount, count }) => {
  console.log("calling from child One ");
  return (
    <div>
      <h1>Child One : {count} </h1>
      <button onClick={handleCount}>Click count </button>
    </div>
  );
};

export default memo(ChildOne);
