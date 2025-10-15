import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
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
    throw new Error("I am broken");
  }

  return <button onClick={() => setIsBreak(!isBreak)}>Break</button>;
};

export default App;
