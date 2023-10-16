import React from "react";

function App() {
  const handleClick = (event) => {
    // Log the synthetic event object
    console.log(event);

    // Log the synthetic event class constructor name
    console.log(event.constructor.name);
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default App;
