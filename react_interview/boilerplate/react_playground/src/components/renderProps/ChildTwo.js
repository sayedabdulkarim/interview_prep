import React from "react";

const ChildTwo = ({ count, handleCount }) => {
  return (
    <div>
      <h1>ChildTwo: {count}</h1>
      <button onClick={() => handleCount()}>handleCount</button>
    </div>
  );
};

export default ChildTwo;
