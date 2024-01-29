import { useDeferredValue } from "react";

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <>
      <h1>Product Lists</h1>
      <ul>
        {/* {deferredProducts.map((product) => ( */}
        {products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
