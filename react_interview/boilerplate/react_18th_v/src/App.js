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
    console.log("Error caught in ErrorBoundary:", error, info);
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
  const [isBreak, setIsBreak] = React.useState(false);

  if (isBreak) {
    throw new Error("ButtonThatBreaks has crashed!");
  }

  return <button onClick={() => setIsBreak(true)}>Click to break me!</button>;
};

export default App;
