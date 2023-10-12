import React from "react";

const RenderOne = ({ counter, handleIncrementCount }) => {
  return (
    <div>
      <h1>Render 1 Counter = {counter}</h1>
      <button onClick={() => handleIncrementCount()}>
        handleIncrementCount
      </button>
    </div>
  );
};

export default RenderOne;
