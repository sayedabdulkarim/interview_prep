import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, " dd");
        return setData(res);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setError(null);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

const App = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/album"
  );

  if (loading) return <h1>LOadin....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
