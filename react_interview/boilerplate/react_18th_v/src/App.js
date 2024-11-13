import React, { useDeferredValue, useState, useTransition } from "react";

const generateItems = () => {
  const array = [];

  for (let i = 0; i < 20000; i++) {
    array.push(`Item Name - ${i}`);
  }

  return array;
};

const products = generateItems();

const filterFunc = (value) => products.filter((o) => o.includes(value));

const App = () => {
  //state
  const [isPending, startTransition] = useTransition();
  const [inpVal, setInpVal] = useState("");

  const filterProducts = filterFunc(inpVal);
  //
  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };
  return (
    <div>
      <input type="text" onChange={handleChange} value={inpVal} />
      {isPending ? <h1>Loading!!!</h1> : <ListItem data={filterProducts} />}
    </div>
  );
};

const ListItem = ({ data }) => {
  const deferredValues = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => ( */}
      {deferredValues?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
