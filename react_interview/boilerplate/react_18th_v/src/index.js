// import React from "react";
import ReactDOM from "react-dom/client";
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

let root = null;
let initialIndex = 0;
let initialValues = [];

const useState = (initVal) => {
  const currentIndex = initialIndex;
  initialValues[currentIndex] = initialValues[currentIndex] ?? initVal;
  initialIndex++;

  const setVal = (val) => {
    initialValues[currentIndex] = val;
    renderApp();
  };

  return [initialValues[currentIndex], setVal];
};

export default function App() {
  //state
  initialIndex = 0;
  const [counterOne, setCounterOne] = useState(1);
  const [counterTwo, setCounterTwo] = useState(-2);
  const [counterThree, setCounterThree] = useState(1);

  return (
    <div>
      <h1>{counterOne}</h1>
      <button onClick={() => setCounterOne(counterOne + 1)}>ADD</button>
      <button onClick={() => setCounterOne(counterOne - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
      <h1>{counterTwo}</h1>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>ADD</button>
      <button onClick={() => setCounterTwo(counterTwo - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
      <h1>{counterThree}</h1>
      <button onClick={() => setCounterThree(counterThree + 1)}>ADD</button>
      <button onClick={() => setCounterThree(counterThree - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
    </div>
  );
}

const renderApp = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(<App />);
};

renderApp();
