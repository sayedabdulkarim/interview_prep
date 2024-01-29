import React, { useDeferredValue, useState, useTransition } from "react";

const App = () => {
  //misc
  const [isPending, setTransition] = useTransition();
  //sttae
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const deferredData = useDeferredValue(data); // Deferred data

  //func
  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setTransition(() => {
      const num = 20000;
      const arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(val);
      }
      setData(arr);
    });
  };
  return (
    <div>
      <h1>App</h1>
      <input
        type="text"
        placeholder="Enter"
        autoFocus
        onChange={(e) => handleChange(e)}
        value={input}
      />

      <hr />
      <hr />
      <hr />

      {isPending ? (
        <h1>Loading....</h1>
      ) : (
        <ul>
          {/* {data.map((i, idx) => { */}
          {deferredData.map((i, idx) => {
            return <li key={idx}>{i}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
