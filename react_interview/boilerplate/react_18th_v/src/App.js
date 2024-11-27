import React, { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " CDC");
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Somethinf went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

const App = () => {
  return (
    <div>
      <h1>Parent component</h1>
      <h1>About component</h1>
      <ErrorBoundary>
        <ButtonComponent />
      </ErrorBoundary>
      {/* <ButtonComponent /> */}
    </div>
  );
};

const ButtonComponent = () => {
  const [forceError, setForceError] = useState(false);

  if (forceError) {
    throw new Error("Error from button component");
  }

  return <button onClick={() => setForceError(true)}>force error</button>;
};

export default App;
