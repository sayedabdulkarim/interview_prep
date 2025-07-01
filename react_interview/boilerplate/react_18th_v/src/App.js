import React, { memo, useCallback } from "react";

const App = () => {
  //state
  const [showNode, setShowNode] = React.useState(false);
  const [count, setCount] = React.useState(0);
  //methods
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setShowNode((prev) => !prev)}>
        {showNode ? "Hide" : "Show"} - Node
      </button>
      <br />
      <hr />
      <br />
      <ChildOne count={count} handleCount={handleCount} />
      <br />
      <hr />
      <br />
      <ChildTwo />
    </div>
  );
};

const ChildOne = memo(({ count, handleCount }) => {
  console.log(" cliked from childOne");
  return (
    <div>
      <h1>ChildOne - {count}</h1>
      <button onClick={handleCount}>SET COUNT</button>
    </div>
  );
});

const ChildTwo = memo(() => {
  console.log(" cliked from childTwo");
  return <div>ChildTwo</div>;
});

export default App;
