import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " error from CDC");
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrng</h1>
    ) : (
      this.props.children
    );
  }
}

const Button = () => {
  const [forcedError, setForcedError] = useState(false);

  if (forcedError) {
    throw new Error("Somethin went wromg,.");
  }

  return <button onClick={() => setForcedError(true)}>Error</button>;
};

const App = () => {
  return (
    <div>
      <h1>Main Component</h1>
      <ErrorBoundary>
        <Button />
      </ErrorBoundary>
    </div>
  );
};

export default App;
