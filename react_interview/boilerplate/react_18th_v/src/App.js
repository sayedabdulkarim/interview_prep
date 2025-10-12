import React from "react";

const populateData = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
};

const getData = populateData(20000);

const filterData = (val) => {
  if (!val) return getData;
  return getData.filter((item) => item.toString().includes(val));
};

const App = () => {
  const [isPending, startTransition] = React.useTransition();
  //state
  const [inp, setInp] = React.useState("");

  const filteredData = filterData(inp);

  const handleChange = (e) => {
    startTransition(() => {
      setInp(e.target.value);
    });
    // setInp(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        autoFocus
        value={inp}
        onChange={handleChange}
      />
      {isPending ? <h1>Loading...</h1> : <ChildComp data={filteredData} />}
    </div>
  );
};

const ChildComp = ({ data }) => {
  const deferredData = React.useDeferredValue(data);
  return (
    <div>
      <ul>
        {deferredData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
