import React, { memo } from "react";

const ChildTwo = () => {
  console.log("child two rendered");
  return <div>ChildTwo</div>;
};

export default memo(ChildTwo);
