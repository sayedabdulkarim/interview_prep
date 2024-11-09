// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

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

import React from "react";
import ReactDOM from "react-dom/client";

let stateValues = [];
let root = null;
let stateIndex = 0;

const useState = (val) => {
  const currentIndex = stateIndex;
  stateValues[currentIndex] = stateValues[currentIndex] ?? val;

  const setVal = (newVal) => {
    stateValues[currentIndex] = newVal;
    renderApp();
  };

  stateIndex++;
  return [stateValues[currentIndex], setVal];
};

const App = () => {
  stateIndex = 0;

  const [countOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(2);
  const [countThree, setCountThree] = useState(-1);

  return (
    <div>
      <h1>Count : {countOne}</h1>
      <button onClick={() => setCountOne(countOne + 1)}>ADD</button>
      <button onClick={() => setCountOne(countOne - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
      <h1>Count : {countTwo}</h1>
      <button onClick={() => setCountTwo(countTwo + 1)}>ADD</button>
      <button onClick={() => setCountTwo(countTwo - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
      <h1>Count : {countThree}</h1>
      <button onClick={() => setCountThree(countThree + 1)}>ADD</button>
      <button onClick={() => setCountThree(countThree - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
    </div>
  );
};

const renderApp = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
};
renderApp();
