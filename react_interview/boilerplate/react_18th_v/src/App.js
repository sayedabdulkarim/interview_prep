import React, { useDeferredValue, useState, useTransition } from "react";

const genList = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item Name - ${i}`);
  }

  return arr;
};
const filteredProducts = (val) => genList().filter((i) => i.includes(val));

const App = () => {
  const [inpVal, setInpVal] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  return (
    <div>
      <input type="text" value={inpVal} onChange={handleChange} />
      {isPending ? (
        <h1>Loading..</h1>
      ) : (
        <ListComponent data={filteredProducts(inpVal)} />
      )}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const deferredValue = useDeferredValue(data);

  return (
    <ul>
      {deferredValue?.map((o) => (
        // {data?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
