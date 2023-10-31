import React, { memo } from "react";

const ChildTwo = () => {
  console.log("Calling from child Two");
  return (
    <div>
      <h1>ChildTwo</h1>
    </div>
  );
};

export default memo(ChildTwo);
