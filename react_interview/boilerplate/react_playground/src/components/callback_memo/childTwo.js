import React, { memo } from "react";

const ChildTwo = ({}) => {
  console.log("Chid Two ");
  return (
    <div>
      <h1>{"Child Two"}</h1>
      <h1>{"Child Two"}</h1>
      <h1>{"Child Two"}</h1>
      <h1>{"Child Two"}</h1>
    </div>
  );
};

export default memo(ChildTwo);
