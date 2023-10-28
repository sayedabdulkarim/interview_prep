import React, { memo } from "react";

const ChildTwo = () => {
  console.log("calling from child Two");

  return <div>ChildTwo</div>;
};

export default memo(ChildTwo);
