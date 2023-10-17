import React, { useState } from "react";

const RenderPropsComp = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount((prev) => prev + 1);
  };

  //   return <div>{render(count, handleClickCount)}</div>;
  return <>{render(count, handleClickCount)}</>;
  //   return { result: render(count, handleClickCount) };

  //   return {render( count, setCount)};
};

export default RenderPropsComp;
