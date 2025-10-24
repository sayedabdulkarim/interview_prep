import React, { useCallback } from "react";
// import ChildOne from "./components/test/ChildOne";
// import ChildTwo from "./components/test/ChildTwo";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [isShown, setIsShown] = React.useState(true);

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("Parent Rendered");
  return (
    <div>
      <h1>Parent App {isShown ? "shown" : "hidden"}</h1>
      <button onClick={handleToggle}>Toggle Child</button>
      <hr />
      <hr />
      <ChildOne count={count} handleCount={handleCount} />
      <ChildTwo />
    </div>
  );
};

export default App;

// Note: ChildOne and ChildTwo components are assumed to be defined in their respective files as per the provided snippets.
const ChildOne = React.memo(({ count, handleCount }) => {
  console.log("ChildOne Rendered");
  return (
    <div>
      ChildOne
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
});

const ChildTwo = React.memo(() => {
  console.log("ChildTwo Rendered");
  return <div>ChildTwo</div>;
});
