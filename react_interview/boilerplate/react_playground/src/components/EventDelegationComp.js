import React, { useState } from "react";

const EventDelegationComp = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => handleCount()}>handleCount</button>
    </div>
  );
};

export default EventDelegationComp;
