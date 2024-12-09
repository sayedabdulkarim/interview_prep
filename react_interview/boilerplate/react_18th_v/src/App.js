import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res?.data);
      })
      .catch((err) => {
        console.log({ err }, " err");
        setLoading(false);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

const App = () => {
  const [list, setList] = useState(null);
  return (
    <div>
      <button>DATA</button>
    </div>
  );
};

export default App;
