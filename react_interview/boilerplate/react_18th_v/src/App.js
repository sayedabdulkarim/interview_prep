import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {});
  }, [url]);

  return { data, loading, error };
};

const App = () => {
  return <div>App</div>;
};

export default App;
