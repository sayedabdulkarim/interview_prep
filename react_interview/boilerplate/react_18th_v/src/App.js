import React, { createContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
};

const CounterComponent = () => {
  const { count, setCount } = React.useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
