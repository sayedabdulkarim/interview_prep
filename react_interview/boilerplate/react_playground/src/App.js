import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  console.log("normal");
  return <div>App</div>;
};

export default App;
