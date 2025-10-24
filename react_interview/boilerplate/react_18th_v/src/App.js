import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  const parentClickHandler = () => {
    console.log("Parent Clicked");
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("Parent Rendered");

  return (
    <div>
      <h1>Parent App</h1>
      <button onClick={parentClickHandler}>Parent Clicked</button>
      <hr />
      <hr />
      <ChildOne handleClick={handleClick} count={count} />
      <ChildTwo />
    </div>
  );
};

const ChildOne = ({ handleClick, count }) => {
  console.log("ChildOne Rendered");
  return (
    <div>
      <h2>ChildOne</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

const ChildTwo = () => {
  console.log("ChildTwo Rendered");
  return <div>ChildTwo</div>;
};

export default App;
