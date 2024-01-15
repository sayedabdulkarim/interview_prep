import React from "react";

const ChildOne = ({ count, handleCount }) => {
  return (
    <div>
      <h1>ChildOne: {count}</h1>
      <button onClick={() => handleCount()}>handleCount</button>
    </div>
  );
};

export default ChildOne;
