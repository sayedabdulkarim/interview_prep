import React, { useMemo, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const handleNum = () => {
    setNum(Math.random());
  };
  //memo
  // const getMemoRandom = useMemo(() => {
  //   console.log("caled getMemoRandomgetMemoRandom");
  //   return Math.max(...[4, 2, 11, 56, 78, 12]);
  // }, []);
  const getMemoRandom = () => {
    console.log("caled getMemoRandomgetMemoRandom");
    return Math.max(...[4, 2, 11, 56, 78, 12]);
  };

  return (
    <div>
      <h1>Num - {num}</h1>
      <button onClick={handleNum}>handleNum</button>

      <hr />
      <hr />
      <hr />
      <hr />

      {/* <h1>GET MAX : {getMemoRandom}</h1> */}
      <h1>GET MAX : {getMemoRandom()}</h1>
    </div>
  );
};

export default App;
