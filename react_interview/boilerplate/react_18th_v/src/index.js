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
let root;
const stateValues = [];
let stateIndex = 0;

const useState = (initVal) => {
  let currentIndex = stateIndex;

  stateValues[currentIndex] = stateValues[currentIndex] || initVal;
  stateIndex++;
  const handleInitVal = (val) => {
    stateValues[currentIndex] = val;
    renderApp();
  };

  return [stateValues[currentIndex], handleInitVal];
};

const App = () => {
  stateIndex = 0;
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  return (
    <div>
      <h1>Count 1: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement Count 1</button>
      <hr />
      <h1>Count 2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrement Count 2</button>
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
