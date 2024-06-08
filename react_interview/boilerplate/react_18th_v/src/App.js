import React, { useState, useEffect } from "react";

const ListItem = ({ item, onRemove }) => {
  useEffect(() => {
    console.log(`Item ${item.id} mounted`);
    return () => console.log(`Item ${item.id} unmounted`);
  }, []);

  return (
    <div>
      {item.text}
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const handleAddToEnd = () => {
    const newItem = {
      id: Math.random(), // Unique ID
      text: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const handleAddToFront = () => {
    const newItem = {
      id: Math.random(), // Unique ID
      text: `Item 0`,
    };
    setItems([newItem, ...items]);
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          // First try with key={item.id} then try with key={index} to see the difference
          <li>
            <ListItem item={item} onRemove={handleRemove} />
          </li>
        ))}
      </ul>
      <button onClick={handleAddToEnd}>Add to End</button>
      <button onClick={handleAddToFront}>Add to Front</button>
    </div>
  );
};

export default List;
