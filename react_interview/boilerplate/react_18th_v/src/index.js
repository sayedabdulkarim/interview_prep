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

const useState = (initVal) => {
  const currentIdx = stateIndex;
  stateValues[currentIdx] = stateValues[currentIdx] ?? initVal;
  stateIndex++;
  const setInitVal = (newVal) => {
    stateValues[currentIdx] = newVal;
    renderApp();
  };
  return [stateValues[currentIdx], setInitVal];
};

const App = () => {
  stateIndex = 0;

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  return (
    <div>
      <h1>Count1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Add</button>
      <button onClick={() => setCount1(count1 - 1)}>Minus</button>
      <hr />
      <h1>Count2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 2)}>Add</button>
      <button onClick={() => setCount2(count2 - 2)}>Minus</button>
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
