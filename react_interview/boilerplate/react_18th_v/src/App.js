import React, { useState } from "react";

const RenderProps = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <div>{render(count, handleClick)}</div>;
};

const ChildOne = ({ count, handleClick }) => {
  return (
    <div>
      <h1>ChildOne : {count}</h1>
      <button onClick={handleClick}>handleClick</button>
    </div>
  );
};

const ChildTwo = ({ count, handleClick }) => {
  return (
    <div>
      <h1>ChildOne : {count}</h1>
      <button onClick={handleClick}>handleClick</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RenderProps
        render={(count, handleClick) => (
          <ChildOne count={count} handleClick={handleClick} />
        )}
      />
      <RenderProps
        render={(count, handleClick) => (
          <ChildTwo count={count} handleClick={handleClick} />
        )}
      />
    </div>
  );
};

export default App;
