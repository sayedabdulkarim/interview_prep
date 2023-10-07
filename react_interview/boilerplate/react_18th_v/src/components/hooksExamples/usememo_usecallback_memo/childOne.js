import React, { memo } from "react";

const ChildOne = ({ counter, handleCounter }) => {
  console.log(" from child 1 ");
  return (
    <div>
      <h1>COunter: {counter}</h1>
      <button onClick={() => handleCounter()}>handleCounter</button>
    </div>
  );
};

// export default ChildOne;
export default memo(ChildOne);
