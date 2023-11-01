import React from "react";

import { useFetch } from "./components/useFetch";

const App = () => {
  const [loading, data, error] = useFetch(
    "https://jsonplaceholder.typicde.com/albums"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div>
      <h1>App</h1>

      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default App;
