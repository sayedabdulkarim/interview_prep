import React, { useState } from "react";

const RenderProps = ({ render }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return <>{render(counter, handleCounter)}</>;
};

const CounterOne = ({ counter, handleCounter }) => {
  return (
    <div>
      <h1>Counter One : {counter}</h1>
      <button onClick={handleCounter}>handleCounter</button>
    </div>
  );
};

const CounterTwo = ({ counter, handleCounter }) => {
  return (
    <div>
      <h1>Counter Two : {counter}</h1>
      <button onClick={handleCounter}>handleCounter</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RenderProps
        render={(counter, handleCounter) => (
          <CounterOne counter={counter} handleCounter={handleCounter} />
        )}
      />
      <br />
      <br />
      <RenderProps
        render={(counter, handleCounter) => (
          <CounterTwo counter={counter} handleCounter={handleCounter} />
        )}
      />
    </div>
  );
};

export default App;
