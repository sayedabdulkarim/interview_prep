import React, { useDeferredValue } from "react";

const ProductList = ({ products }) => {
  const deferredProducts = useDeferredValue(products);
  return (
    <div>
      <ul>
        {products.map((item) => (
          // {deferredProducts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
