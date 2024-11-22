import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, " ress");
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  // return [loading, data, error];
  return { loading, data, error };
};

const App = () => {
  const {
    loading: isLoading,
    error: isError,
    data: dummyData,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {isLoading && <h1>Loading....</h1>}
      <h1>Hello</h1>
      <pre>{JSON.stringify(dummyData, null, 2)}</pre>
      <button onClick={() => console.log(dummyData, " dd")}>data</button>
    </div>
  );
};

export default App;
