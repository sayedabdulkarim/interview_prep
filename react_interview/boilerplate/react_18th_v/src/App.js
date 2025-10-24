import React, { useCallback, useMemo } from "react";
// import ChildOne from "./components/test/ChildOne";
// import ChildTwo from "./components/test/ChildTwo";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [isShown, setIsShown] = React.useState(true);
  const [numbers, setNumbers] = React.useState([
    49, 65, 3, 12, 117, 89, 23, 45, 68, 90,
  ]); // 10 random numbers

  const handleToggle = () => {
    setIsShown((prev) => !prev);
  };

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //   const getMaxNumber = useCallback(() => {
  //     console.log("getMaxNumber called");
  //     return Math.max(...numbers);
  //   }, []);
  const getMaxNumber = useMemo(() => {
    console.log("getMaxNumber called");
    return Math.max(...numbers);
  }, [numbers]);

  console.log("Parent Rendered");
  return (
    <div>
      <h1>Parent App {isShown ? "shown" : "hidden"}</h1>
      <button onClick={handleToggle}>Toggle Child</button>
      <hr />
      <hr />
      {/* <h2>Max Number: {getMaxNumber()}</h2> */}
      <h2>Max Number: {getMaxNumber}</h2>
      <button
        onClick={() => setNumbers((prev) => [...prev, Math.random() * 500])}
      >
        Add Number
      </button>
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
