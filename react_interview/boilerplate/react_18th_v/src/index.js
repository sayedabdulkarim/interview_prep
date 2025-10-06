import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// //TODO: to verify
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

let root = null;
const stateValues = [];
let stateIndex = 0;

const useState = (val) => {
  console.log("useState called");
  const currentIdx = stateIndex;
  stateValues[currentIdx] = stateValues[currentIdx] ?? val;

  const setVal = (newVal) => {
    stateValues[currentIdx] = newVal;
    renderApp();
  };
  stateIndex++;
  return [stateValues[currentIdx], setVal];
};

const App = () => {
  stateIndex = 0; // reset on each render
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Count1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}> Add </button>
      <button onClick={() => setCount1(count1 - 1)}> Subtract </button>
      <hr />
      <h1>Count2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}> Add </button>
      <button onClick={() => setCount2(count2 - 1)}> Subtract </button>
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
