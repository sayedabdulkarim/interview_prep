import React, { useState } from "react";

const Render1Props = ({ count, handleCount }) => {
  return (
    <div>
      <h1>Render1Props</h1>
      <button onClick={handleCount}>Render Props 1 = {count}</button>
    </div>
  );
};

export default Render1Props;
