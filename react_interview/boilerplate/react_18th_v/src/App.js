import React from "react";

const generateProductList = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(`Product ${i}`);
  }
  return arr;
};

const generatedData = generateProductList(10000);

const Parent = () => {
  const [isPending, startTransition] = React.useTransition();
  const [input, setInput] = React.useState("");

  const filteredData = generatedData.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  const handleInput = (e) => {
    // setInput(e.target.value);
    startTransition(() => {
      setInput(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type something..."
        className="border p-2 mb-4 w-full"
      />
      {isPending ? <div>Loading...</div> : <Child data={filteredData} />}
    </div>
  );
};

const Child = ({ data }) => {
  const deferredData = React.useDeferredValue(data);
  return (
    <ul>
      {deferredData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Parent;
