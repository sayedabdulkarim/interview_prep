import React from "react";

const populateArray = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
};

let data = populateArray(20000);

function getFilteredData(val) {
  if (!val) return data;
  return data.filter((item) => item.toString().includes(val));
}

const App = () => {
  const [isPending, startTransition] = React.useTransition();
  const [inputVal, setInputVal] = React.useState("");
  const filteredData = React.useMemo(
    () => getFilteredData(inputVal),
    [inputVal]
  );

  const handleChange = (e) => {
    startTransition(() => {
      setInputVal(e.target.value);
    });
    // setInputVal(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputVal} onChange={handleChange} />
      {isPending ? (
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : (
        <ChildComponent data={filteredData} />
      )}
    </div>
  );
};

const ChildComponent = ({ data }) => {
  const defferedData = React.useDeferredValue(data);
  return (
    <div>
      <ul>
        {/* {data.map((item, index) => ( */}
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
