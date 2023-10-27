import React, { useState } from "react";

const ChildTwo = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Child Two </h1>
      <h3>Count - {count} </h3>
      <button onClick={handleCount}>handleCount Two </button>
    </div>
  );
};

export default ChildTwo;
