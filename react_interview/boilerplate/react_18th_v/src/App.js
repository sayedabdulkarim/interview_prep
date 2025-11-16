import React from "react";

const App = () => {
  return (
    <div>
      <div onClick={() => console.log("Outer")}>
        <button onClick={() => console.log("Inner")}>Click</button>
      </div>
      <hr />
      <hr />
      <hr />
      <div onClickCapture={() => console.log("Outer")}>
        <button onClick={() => console.log("Inner")}>Click</button>
      </div>
    </div>
  );
};

export default App;
