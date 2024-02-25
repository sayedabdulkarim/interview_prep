import React, { useEffect, useState, useTransition } from "react";
import ListComponent from "./ListComponent";

const Index = () => {
  //state
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("hello world");
  //
  const [isPrending, startTransition] = useTransition();
  //func
  const randomNumberList = () => {
    const nums = 10000;
    const arr = [];

    for (let i = 0; i < nums; i++) {
      arr.push(`item - ${i}`);
    }

    return arr;
  };

  const handleFilter = (e) => {
    const val = e.target.value;
    setText(val);
    startTransition(() => {
      const arr = randomNumberList().filter((i) => i.includes(val));
      setItems(arr);
    });
  };

  useEffect(() => {
    setItems(randomNumberList());
  }, []);

  return (
    <div>
      <h1
        onClick={() => setTitle(Math.random() * 100)}
        style={{ color: "white" }}
      >
        {isPrending && "Loading.............."}
      </h1>

      <input
        type="text"
        value={text}
        // onChange={(e) => setText(e.target.value)}
        onChange={(e) => handleFilter(e)}
        placeholder="SEARCH..."
        autoFocus
      />
      <ListComponent items={items} />
    </div>
  );
};

export default Index;
