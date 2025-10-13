import React from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log("App Mounted");
  });
  return (
    <div>
      <h1>React 18th Edition</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
