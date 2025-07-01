import React, { createContext, useContext } from "react";

// Create a Context
const UserContext = createContext();

// A component that provides the context value
const UserProvider = ({ children }) => {
  const user = { name: "John Doe", age: 30 }; // Example data
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// A component that consumes the context value
const UserProfile = () => {
  const user = useContext(UserContext); // Access the context value
  return (
    <div>
      <h1>User Profile</h1>
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
