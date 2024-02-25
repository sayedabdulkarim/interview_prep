import React, { useDeferredValue } from "react";

const ListComponent = ({ items }) => {
  const listItems = useDeferredValue(items);
  return (
    <ul>
      {listItems?.map((i) => {
        return <li key={i}>{i}</li>;
      })}
    </ul>
  );
};

export default ListComponent;
