import React, { memo } from "react";

const ChildTwo = () => {
  console.log("ChildTwo Rendered");
  return <div>ChildTwo</div>;
};

export default memo(ChildTwo);
