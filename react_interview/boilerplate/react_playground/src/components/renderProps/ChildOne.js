import React, { useState } from "react";

const ChildOne = ({ count, handleCount }) => {
  //   const [count, setCount] = useState(0);

  //   const handleCount = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <div>
      <h1>Child One </h1>
      <h3>Count - {count} </h3>
      <button onClick={handleCount}>handleCount One </button>
    </div>
  );
};

export default ChildOne;
