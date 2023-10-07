import React, { memo } from "react";

const childTwo = () => {
  console.log(" child 222");
  return (
    <div>
      <h1>childTwo</h1>
      <h1>childTwo</h1>
      <h1>childTwo</h1>
    </div>
  );
};

// export default childTwo;
export default memo(childTwo);
