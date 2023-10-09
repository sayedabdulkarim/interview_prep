import React, { useState } from "react";

// Error Boundary Component (Class-based)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //   The static keyword in JavaScript classes denotes that a method is a static method, meaning it belongs to the class itself and not to instances of the class.

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Functional Component that may throw an error
const ButtonThatBreaks = () => {
  const [shouldBreak, setShouldBreak] = useState(true);

  if (shouldBreak) {
    throw new Error("I broke!");
  }

  return <button onClick={() => setShouldBreak(true)}>Break Me</button>;
};

// Main App (Functional Component)
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <ErrorBoundary fallback={"Error"}>
        <ButtonThatBreaks />
      </ErrorBoundary>
    </div>
  );
};

export default App;
