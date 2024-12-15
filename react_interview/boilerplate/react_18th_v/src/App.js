import React, { useState } from "react";

const RenderProps = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return <>{render(count, handleCount)}</>;
};

const ComponentOne = ({ count, handleCount }) => {
  return (
    <div>
      <h1>ComponentOne : {count}</h1>
      <button onClick={handleCount}>handleCount</button>
    </div>
  );
};

const ComponentTwo = ({ count, handleCount }) => {
  return (
    <div>
      <h1>ComponentTwo : {count}</h1>
      <button onClick={handleCount}>handleCount</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RenderProps
        render={(count, handleCount) => (
          <ComponentOne count={count} handleCount={handleCount} />
        )}
      />
      <br />
      <br />
      <RenderProps
        render={(count, handleCount) => (
          <ComponentTwo count={count} handleCount={handleCount} />
        )}
      />
    </div>
  );
};

export default App;
