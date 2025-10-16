import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught an error:", { error, info });
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong.</h1>
    ) : (
      this.props.children
    );
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
  const [isBreak, setIsBreak] = React.useState(false);

  if (isBreak) {
    throw new Error("I broke!");
  }

  return <button onClick={() => setIsBreak(true)}>Break Me</button>;
};

export default App;
