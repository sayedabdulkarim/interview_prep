import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.error({ error, info }, " error from componentDidCatch");
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <h1>Home Component</h1>
      <ErrorBoundary>
        <ButtonComp />
      </ErrorBoundary>
    </div>
  );
};

const ButtonComp = () => {
  const [forceError, setForceError] = React.useState(false);

  if (forceError) {
    throw new Error("Error break");
  }

  return (
    <div>
      <h1>Button Component</h1>
      <button onClick={() => setForceError(true)}>Click</button>
    </div>
  );
};

export default App;
