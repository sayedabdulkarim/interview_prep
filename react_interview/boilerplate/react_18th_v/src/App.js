import React from "react";

// Component
const ButtonGroup = ({ children }) => {
  const styledChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: `border border-red-500 px-4 py-2 ${
        child.props.className || ""
      }`,
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
      </ButtonGroup>
    </div>
  );
}

export default App;
