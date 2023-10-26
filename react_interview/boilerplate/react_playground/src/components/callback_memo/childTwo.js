import React, { memo } from "react";

const ChildTwo = () => {
  console.log("caling from child Two");

  return <div>ChildTwo</div>;
};

export default memo(ChildTwo);
