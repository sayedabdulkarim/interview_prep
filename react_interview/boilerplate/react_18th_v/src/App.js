import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " log error from CDC...");
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Somethign went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

const ButtonComponent = () => {
  const [forceError, setForceError] = useState(false);

  if (forceError) {
    throw new Error("Error from button Component");
  }

  return <button onClick={() => setForceError(true)}>Force Error</button>;
};

const App = () => {
  return (
    <div>
      <h1>HOME Component</h1>
      <h1>About Component</h1>
      <ErrorBoundary>
        <ButtonComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
