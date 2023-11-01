import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (res?.status === 200) {
          setData(res?.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return [loading, data, error];
};

////////////////////////////////////////////////////////
// import React from "react";

// import { useFetch } from "./components/useFetch";

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
