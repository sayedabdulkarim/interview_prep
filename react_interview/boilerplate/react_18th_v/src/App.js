import React, { useState } from "react";

const getProd = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

const prod = getProd(10000);

const filterProd = (arg) => prod.filter((i) => i.toString().includes(arg));

const App = () => {
  const [isPending, startTransition] = React.useTransition();
  const [inp, setInp] = useState("");
  const myProd = filterProd(inp);

  const handleChange = (e) => {
    startTransition(() => {
      setInp(e.target.value);
    });
    // setInp(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inp} onChange={handleChange} autoFocus />
      {isPending ? <h2>Loading...</h2> : <ChildComponent data={myProd} />}
    </div>
  );
};

const ChildComponent = ({ data }) => {
  const deferredData = React.useDeferredValue(data);
  return (
    <div>
      <ul>
        {deferredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
