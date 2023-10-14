import React, { Component, useState } from "react";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // if (error) {
    // this.setState({ hasError: true });
    return { hasError: true };
    // }
  }

  componentDidCatch(error) {
    console.log(error, " error from CDC");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ErrorComponent = () => {
  const [buttonError, setButtonError] = useState(false);

  if (buttonError) {
    throw new Error("Broked....");
  }

  return (
    <div>
      <button onClick={() => setButtonError(true)}>error button</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Hello WOrkd</h2>
      <ErrorBoundaries>
        <ErrorComponent></ErrorComponent>
      </ErrorBoundaries>
    </div>
  );
};

export default App;
