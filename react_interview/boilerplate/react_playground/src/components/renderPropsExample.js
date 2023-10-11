import React, { useState } from "react";

const RenderProps = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return render(count, handleIncrementCount);
};

export default RenderProps;
