import React, { useState } from "react";

const Parent = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return render(count, handleCount);
};

export default Parent;
