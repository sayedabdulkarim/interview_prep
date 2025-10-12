import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ErrorBoundary>
        <ButtonThatBreaks />
      </ErrorBoundary>
    </div>
  );
};

const ButtonThatBreaks = () => {
  const [shouldBreak, setShouldBreak] = React.useState(false);

  if (shouldBreak) {
    throw new Error("I broke!");
  }

  const handleClick = () => {
    setShouldBreak((prev) => !prev);
  };

  return (
    <button onClick={handleClick}>{shouldBreak ? "Unbreak" : "Break"}</button>
  );
};

export default App;
