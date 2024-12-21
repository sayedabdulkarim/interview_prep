import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " from CDC");
  }

  static getDerivedStateFromError(err) {
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
      <h1>HOME</h1>
      <h1>ABOUT</h1>
      <ErrorBoundary>
        <ButtonComponent />
      </ErrorBoundary>
    </div>
  );
};

const ButtonComponent = () => {
  const [forceError, setForceError] = useState(false);

  if (forceError) {
    throw new Error("Error from Button Component");
  }

  return (
    <div>
      <button onClick={() => setForceError(true)}>FORCE ERROR </button>
    </div>
  );
};

export default App;
