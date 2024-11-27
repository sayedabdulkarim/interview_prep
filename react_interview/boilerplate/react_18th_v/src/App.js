import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item Name - ${i}`);
  }

  return arr;
};

const filterProd = (val) => genArr().filter((o) => o.includes(val));

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [inpVal, setInpVal] = useState("");
  //
  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
    // setInpVal(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inpVal} onChange={handleChange} />
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <ListComponent data={filterProd(inpVal)} />
      )}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const items = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => ( */}
      {items?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
