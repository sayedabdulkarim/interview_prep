import React, { useMemo } from "react";

const App = () => {
  const [isShow, setIsShow] = React.useState(true);
  const [numbers, setNumbers] = React.useState([
    44, 55, 66, 65, 105, 77, 88, 99, 100, 101, 102,
  ]); // random numbers array of lenght 10

  const maxNum = useMemo(() => {
    console.log("Calculating Max Number");
    return Math.max(...numbers);
  }, [numbers]);

  console.log("App Rendered");
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"}
      </button>
      <hr />
      <hr />
      <hr />
      <h1>Max : {maxNum}</h1>
      <button
        onClick={() =>
          setNumbers([...numbers, Math.floor(Math.random() * 150)])
        }
      >
        Add Random Number
      </button>
    </div>
  );
};

export default App;
