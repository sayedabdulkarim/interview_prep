import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item Name: ${i}`);
  }

  return arr;
};

const filterArr = (val) => genArr().filter((o) => o.includes(val));

const App = () => {
  //
  const [isPending, startTransition] = useTransition();
  const [inpVal, setInpVal] = useState("");

  const productsArr = filterArr(inpVal);

  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inpVal}
        onChange={handleChange}
        placeholder="Enter Text"
        autoFocus
      />
      <br />
      <br />
      {isPending ? <h1>Loading...</h1> : <ListComponent data={productsArr} />}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const defferedVal = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => ( */}
      {defferedVal?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
