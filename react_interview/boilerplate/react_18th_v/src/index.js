import React from "react";
import ReactDOM from "react-dom/client";

let root = null;
const stateValues = [];
let stateIndex = 0;

const useState = (val) => {
  const currentIdx = stateIndex;
  stateValues[currentIdx] = stateValues[currentIdx] ?? val;

  const setVal = (val) => {
    stateValues[currentIdx] = val;
    renderApp();
  };
  stateIndex++;
  return [stateValues[currentIdx], setVal];
};

const App = () => {
  stateIndex = 0;

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Add</button>
      <button onClick={() => setCount1(count1 - 1)}>Minus</button>
      <hr />
      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Add</button>
      <button onClick={() => setCount2(count2 - 1)}>Minus</button>
    </div>
  );
};

const renderApp = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(
    <>
      <App />
    </>
  );
};

renderApp();
