import React, { useState, useContext, createContext } from "react";

const ToggleContext = createContext();

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const ToggleOn = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

export const ToggleOff = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

export const ToggleButton = () => {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{on ? "Turn Off" : "Turn On"}</button>;
};

// Usage
const App = () => (
  <Toggle>
    <ToggleOn>Toggle is ON</ToggleOn>
    <ToggleOff>Toggle is OFF</ToggleOff>
    <ToggleButton />
  </Toggle>
);

export default App;
