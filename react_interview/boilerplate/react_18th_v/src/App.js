import React, {
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

const genList = () => {
  const arr = [];

  for (let i = 0; i <= 20000; i++) {
    arr.push(`Item : ${i}`);
  }

  return arr;
};

const allProd = genList();

function filteredProducts(val) {
  if (!val) return allProd;
  else {
    return allProd?.filter((o) => o.includes(val));
  }
}

const App = () => {
  //state
  const [inpVal, setInpVal] = useState("");
  const list = filteredProducts(inpVal);
  const [isPending, startTransition] = useTransition();

  //method
  const handleChange = (e) => {
    // setInpVal(e.target.value);

    startTransition(() => {
      setInpVal(e.target.value);
    });
  };

  //
  useEffect(() => {}, []);
  return (
    <div>
      <input
        type="text"
        value={inpVal}
        onChange={handleChange}
        placeholder="Add Text"
      />
      <br />
      {isPending && <h1>Loading....</h1>}
      <br />
      <ListComponent items={list} />
    </div>
  );
};

const ListComponent = ({ items }) => {
  const deferredProducts = useDeferredValue(items);
  return (
    <ul>
      {/* {items?.map((o) => { */}
      {deferredProducts?.map((o) => {
        return <li key={o}>{o}</li>;
      })}
    </ul>
  );
};

export default App;
