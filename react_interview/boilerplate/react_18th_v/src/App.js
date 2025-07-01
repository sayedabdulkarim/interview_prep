import React, { memo, useCallback, useMemo } from "react";

const App = () => {
  //state
  const [showNode, setShowNode] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [numbers, setNumbers] = React.useState([11, 22, 3]);
  //methods
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const getMax = useMemo(() => {
    console.log("getMAx called");
    return Math.max(...numbers);
  }, [numbers]);

  // const getMax = () => {
  //   console.log("getMAx called");
  //   return Math.max(...numbers);
  // };

  const handleInsert = () => {
    const num = Math.round(Math.random() * 25);
    setNumbers((prev) => [...prev, num]);
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setShowNode((prev) => !prev)}>
        {showNode ? "Hide" : "Show"} - Node
      </button>
      <button onClick={handleInsert}>INSERT NUM</button>
      {/* memo */}
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      {/* <h1>{getMax()}</h1> */}
      <h1>{getMax}</h1>
      {/* memo */}
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
