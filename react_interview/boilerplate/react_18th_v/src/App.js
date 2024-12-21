import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item Name - ${i}`);
  }

  return arr;
};

const filterArr = (val) => genArr().filter((o) => o.includes(val));

const App = () => {
  const [isPending, startTransition] = useTransition();

  const [inp, setInpVal] = useState("");

  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  const prodArr = filterArr(inp);

  return (
    <div>
      <input type="text" onChange={handleChange} value={inp} autoFocus />

      <br />
      <br />
      <br />
      {isPending ? <h1>Loading...</h1> : <ListComponent data={prodArr} />}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const defVal = useDeferredValue(data);

  return (
    <ul>
      {/* {data?.map((i) => { */}
      {defVal?.map((i) => {
        return <li key={i}>{i}</li>;
      })}
    </ul>
  );
};

export default App;
