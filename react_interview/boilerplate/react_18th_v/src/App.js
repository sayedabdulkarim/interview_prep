import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " cdc");
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Someyhing wnt wrong..</h1>
    ) : (
      this.props.children
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Home component</h1>
      <h1>Profile component</h1>
      <ErrorBoundary>
        <ButtonComponent />
      </ErrorBoundary>
    </div>
  );
};

const ButtonComponent = () => {
  const [forceError, setForceError] = useState(false);

  if (forceError) {
    throw new Error("Error from buttton component.");
  }

  return <button onClick={() => setForceError(true)}>CLICK</button>;
};

export default App;
