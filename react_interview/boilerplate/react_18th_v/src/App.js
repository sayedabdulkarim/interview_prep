import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //
  componentDidCatch(error, info) {
    console.log({ error, info }, " error from CDC");
  }

  static getDerivedStateFromError() {
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

const ButtonComponent = () => {
  const [forceError, setForceError] = useState(false);

  if (forceError) {
    throw new Error("Error from BTN Component");
  }

  return <button onClick={() => setForceError(true)}>FORCE ERROR </button>;
};

const App = () => {
  return (
    <div>
      <h1>ABOUT COMPONENT</h1>
      <ErrorBoundary>
        <ButtonComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
