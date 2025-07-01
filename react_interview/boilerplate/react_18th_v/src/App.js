import React from "react";

const App = () => {
  //state
  const [count, setCount] = React.useState(0);
  //methods
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Parent</h1>
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

const ChildOne = ({ count, handleCount }) => {
  console.log(" cliked from childOne");
  return (
    <div>
      <h1>ChildOne - {count}</h1>
      <button onClick={handleCount}>SET COUNT</button>
    </div>
  );
};

const ChildTwo = () => {
  console.log(" cliked from childTwo");
  return <div>ChildTwo</div>;
};

export default App;
