import React from "react";

const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

const Counter = () => {
  const { count, increment, decrement } = React.useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
