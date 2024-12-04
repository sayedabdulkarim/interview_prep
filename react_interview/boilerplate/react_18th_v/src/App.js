import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log({ error, info }, " error from CDC");
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h1>Somethog went wrong .. </h1>
    ) : (
      this.props.children
    );
  }
}

const App = () => {
  return <div>App</div>;
};

export default App;
