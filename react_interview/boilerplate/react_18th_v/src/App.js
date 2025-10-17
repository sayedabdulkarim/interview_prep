import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in Error Boundary:", { error, info });
  }

  render() {
    return this.state.hasError ? (
      <p>Something went wrong</p>
    ) : (
      this.props.children
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Parent component</h1>
      <ErrorBoundary>
        <ButtonThatBreaks />
      </ErrorBoundary>
    </div>
  );
};

const ButtonThatBreaks = () => {
  const [isBreak, setIsBreak] = React.useState(false);

  if (isBreak) {
    throw new Error("Button component has been broken!");
  }

  return <button onClick={() => setIsBreak(true)}>Break the App</button>;
};

export default App;
