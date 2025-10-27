import React, { useMemo } from "react";

const App = () => {
  const [isShow, setIsShow] = React.useState(true);
  const [numbers, setNumbers] = React.useState([
    44, 12, 78, 5, 99, 23, 56, 1, 100, 34,
  ]); // random numbers in jiggling orders from 1-100

  const getMax = useMemo(() => {
    console.log("get max called");
    return Math.max(...numbers);
  }, [numbers]);

  console.log("App rendered");

  return (
    <div>
      {/* <h1>Max Number: {getMax()}</h1> */}
      <h1>Max Number: {getMax}</h1>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"} Component
      </button>
    </div>
  );
};

export default App;
