import React, { useState } from "react";

const ChildTwo = ({ count, handleClickCount }) => {
  //   const [count, setCount] = useState(0);

  //   const handleClickCount = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <div>
      <h1>Child Two : {count}</h1>
      <button onClick={() => handleClickCount()}>Click One</button>
    </div>
  );
};

export default ChildTwo;
