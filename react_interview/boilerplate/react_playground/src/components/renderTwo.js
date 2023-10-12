import React from "react";

const RenderTwo = ({ counter, handleIncrementCount }) => {
  return (
    <div>
      <h1>Render 2 Counter = {counter}</h1>
      <button onClick={() => handleIncrementCount()}>
        handleIncrementCount
      </button>
    </div>
  );
};

export default RenderTwo;
