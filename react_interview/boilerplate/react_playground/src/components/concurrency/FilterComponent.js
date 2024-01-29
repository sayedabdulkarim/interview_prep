import React, { useEffect, useState } from "react";

import { generateProducts } from "./data";
import ProductList from "./ProductList";

const FilterComponent = () => {
  //state
  //   const getProducts = generateProducts();
  const [data, setData] = useState(generateProducts());
  const [input, setInput] = useState("");
  //func
  const handleChange = (val) => {
    if (!val) {
      return setData(generateProducts());
    } else {
      const filterData = data.filter((i) => i.includes(val));
      setData(filterData);
    }
  };

  useEffect(() => {
    handleChange(input);
  }, [input]);

  return (
    <div>
      <h1>Filter Page</h1>
      {/* inp */}
      <input
        autoFocus
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* list */}
      <ProductList products={data} />
    </div>
  );
};

export default FilterComponent;
