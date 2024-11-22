import React, { useDeferredValue, useState, useTransition } from "react";

const genArr = () => {
  const array = [];

  for (let i = 0; i <= 20000; i++) {
    array.push(`Item Name :  ${i}`);
  }

  return array;
};

const filterFun = (val) => genArr().filter((i) => i.includes(val));

const App = () => {
  const [isPending, startTransition] = useTransition();

  //state
  const [inpVal, setInpVal] = useState("");
  const filteredProduct = filterFun(inpVal);

  const handleChange = (e) => {
    // setInpVal(e.target.value);
    //
    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inpVal} autoFocus />
      <br />
      <br />
      {isPending ? <h1>Loading...</h1> : <ProductList data={filteredProduct} />}
    </div>
  );
};

const ProductList = ({ data }) => {
  const deferredArr = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => ( */}
      {deferredArr?.map((o) => (
        <li key={o}>{o}</li>
      ))}
    </ul>
  );
};

export default App;
