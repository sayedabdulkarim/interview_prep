import React from "react";

// Component
const ButtonGroup = ({ children }) => {
  const buttonStyle = {
    border: "2px solid red",
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    color: "green",
  };

  const styledChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      style: { ...buttonStyle, ...child.props.style },
    });
  });

  return <div>{styledChildren}</div>;
};

// Usage
function App() {
  return (
    <div>
      <ButtonGroup>
        <button>Save</button>
        <button>Close</button>
        <button>Delete</button>
        <h1>Hello</h1>
      </ButtonGroup>
    </div>
  );
}

export default App;
