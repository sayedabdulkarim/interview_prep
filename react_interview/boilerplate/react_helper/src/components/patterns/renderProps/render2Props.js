import React, { useState } from "react";

const Render2Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render2Props</h1>
      <button onMouseEnter={handleCount}>Render Props 2 = {count}</button>
    </div>
  );
};

export default Render2Props;
