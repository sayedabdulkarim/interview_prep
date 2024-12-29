import React, { useDeferredValue } from "react";

const genArr = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(`Item Name - ${i}`);
  }
  return arr;
};

const filterArr = (val) => genArr(20000).filter((item) => item.includes(val));

const App = () => {
  const [isPending, startTransition] = React.useTransition();
  const [inp, setInp] = React.useState("");

  const handleChange = (e) => {
    startTransition(() => {
      setInp(e.target.value);
    });
    // setInp(e.target.value);
  };

  const prodArr = filterArr(inp);

  return (
    <div>
      <input type="text" value={inp} onChange={handleChange} />
      {isPending ? "Loading..." : <ListComponent data={prodArr} />}
    </div>
  );
};

const ListComponent = ({ data }) => {
  const defferedVal = useDeferredValue(data);
  return (
    <ul>
      {/* {data.map((item, index) => ( */}
      {defferedVal.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default App;
