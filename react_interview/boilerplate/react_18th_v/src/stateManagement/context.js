import React, { createContext, useContext } from "react";

// Create a Context
const UserContext = createContext();

// A component that provides the context value
const UserProvider = ({ children }) => {
  const [count, setCount] = React.useState(0); // Example state management

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const user = { name: "John Doe", age: 30 }; // Example data
  return (
    <UserContext.Provider value={{ user, count, handleIncrement }}>
      {children}
    </UserContext.Provider>
  );
};

// A component that consumes the context value
const UserProfile = () => {
  const { user, count, handleIncrement } = useContext(UserContext); // Access the context value
  return (
    <div>
      <h1>User Profile - {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
