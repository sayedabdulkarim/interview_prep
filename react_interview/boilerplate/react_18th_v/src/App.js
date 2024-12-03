import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item name: ${i}`);
  }

  return arr;
};

const filteredArr = (val) => genArr().filter((o) => o.includes(val));

const App = () => {
  const [inpVal, setInpVal] = useState("");
  const prodArr = filteredArr(inpVal);
  const [isPending, startTransition] = useTransition();
  //
  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  return (
    <div>
      <input type="text" value={inpVal} onChange={handleChange} autoFocus />
      <br />
      <br />
      <br />
      {isPending ? <h1>Loadin...</h1> : <ListComponent data={prodArr} />}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const deferedValues = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => ( */}
      {deferedValues?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
