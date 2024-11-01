import React from "react";
import ReactDOM from "react-dom/client";

// Define a global root variable
let root = null;

// Manage individual state slices using an array
const stateValues = [];
let stateIndex = 0;

const useState = (initialVal) => {
  const currentIndex = stateIndex;
  stateValues[currentIndex] = stateValues[currentIndex] ?? initialVal;
  const setVal = (newVal) => {
    stateValues[currentIndex] = newVal;
    renderApp();
  };

  stateIndex++; // Increment index for the next useState call
  return [stateValues[currentIndex], setVal];
};

const App = () => {
  stateIndex = 0; // Reset index on each render

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(-1);

  return (
    <div>
      <div className="one">
        <h1>Count: {count1}</h1>
        <button onClick={() => setCount1(count1 - 1)}>Minus</button>
        <button onClick={() => setCount1(count1 + 1)}>Add</button>
        <button onClick={() => console.log({ stateValues, stateIndex })}>
          Test
        </button>
      </div>
      <hr />
      <div className="two">
        <h1>Count: {count2}</h1>
        <button onClick={() => setCount2(count2 - 2)}>Minus</button>
        <button onClick={() => setCount2(count2 + 2)}>Add</button>
      </div>
    </div>
  );
};

const renderApp = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
