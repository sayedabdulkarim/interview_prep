import React, { useDeferredValue, useState, useTransition } from "react";

const generateList = () => {
  const arr = [];

  for (let i = 0; i < 20000; i++) {
    arr.push(`Item - ${i}`);
  }

  return arr;
};

const products = generateList();

const filterProucts = (val) => products.filter((i) => i.includes(val));

const Parent = () => {
  //
  const [isPending, startTransition] = useTransition();

  //state
  const [inpVal, setInpVal] = useState("");
  const [productsArr, setProductsArr] = useState(generateList());

  const filteredProducts = filterProucts(inpVal);

  const handleChange = (e) => {
    startTransition(() => {
      setInpVal(e.target.value);
    });
    // setInpVal(e.target.value);
  };

  return (
    <div>
      <button onClick={() => console.log({ productsArr })}>arr</button>
      <br />
      <input type="text" value={inpVal} onChange={handleChange} />
      {/* <ListComponent data={productsArr} /> */}
      <ListComponent data={filteredProducts} />
    </div>
  );
};

const ListComponent = ({ data }) => {
  const deferredProducts = useDeferredValue(data);
  return (
    <ul>
      {/* {data?.map((o) => { */}
      {deferredProducts?.map((o) => {
        return <li key={o}>{o}</li>;
      })}
    </ul>
  );
};

export default Parent;
