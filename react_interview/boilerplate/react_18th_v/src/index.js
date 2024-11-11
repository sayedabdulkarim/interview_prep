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

//
let root = null;
const stateValues = [];
let stateIndex = 0;

const useState = (initialVal) => {
  const currentIndex = stateIndex;

  stateValues[currentIndex] = stateValues[currentIndex] ?? initialVal;
  stateIndex++;

  const setVal = (val) => {
    stateValues[currentIndex] = val;
    renderApp();
  };

  return [stateValues[currentIndex], setVal];
};

const App = () => {
  //
  stateIndex = 0;
  const [countOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(-1);
  const [countThree, setCountThree] = useState(2);

  return (
    <div>
      <h1>{countOne}</h1>
      <button onClick={() => setCountOne(countOne + 1)}>ADD</button>
      <button onClick={() => setCountOne(countOne - 1)}>MINUS</button>
      <br />
      <br />
      <hr />

      <h1>{countTwo}</h1>
      <button onClick={() => setCountTwo(countTwo + 1)}>ADD</button>
      <button onClick={() => setCountTwo(countTwo - 1)}>MINUS</button>
      <br />
      <br />
      <hr />

      <h1>{countThree}</h1>
      <button onClick={() => setCountThree(countThree + 1)}>ADD</button>
      <button onClick={() => setCountThree(countThree - 1)}>MINUS</button>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default App;

const renderApp = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(<App />);
};

renderApp();
