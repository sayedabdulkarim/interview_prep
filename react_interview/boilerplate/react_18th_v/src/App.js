import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Product - ${i}`);
  }

  return arr;
};

const filterArr = (val) => genArr().filter((o) => o.includes(val));

const App = () => {
  const [isPending, startTransition] = useTransition();

  const [inpVal, setInpVal] = useState("");

  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };
  const prodArr = filterArr(inpVal);

  return (
    <div>
      <input type="text" onChange={handleChange} value={inpVal} autoFocus />
      <br />
      <br />
      {isPending ? <h1>Loading...</h1> : <ListComponent data={prodArr} />}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const deferredVal = useDeferredValue(data);
  return (
    <ul>
      {
        // data?.map((o) => {
        deferredVal?.map((o) => {
          return <li key={o}>{o}</li>;
        })
      }
    </ul>
  );
};

export default App;
