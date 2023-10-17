import React, { memo } from "react";

const ChildTwo = () => {
  console.log("child twoooo");
  return (
    <div>
      <h1>Child Two</h1>
    </div>
  );
};

export default memo(ChildTwo);
