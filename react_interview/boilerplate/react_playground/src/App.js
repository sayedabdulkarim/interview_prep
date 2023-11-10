import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  //optimized with debbounce
  const debounce = (func) => {
    let timer;

    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    const { value } = e.target;
    axios
      .get(`https://demo.dataverse.org/api/search?q=${value}`)
      // .then(res => console.log(res, ' ress'))
      .then((res) => setData(res.data.data.items))
      .catch((err) => console.log(err, " err"));
  };

  const optimizedVesion = useCallback(debounce(handleChange), []);
  // console.log(data, ' ddd')
  return (
    <div style={{ margin: "20px 10px" }}>
      {/* <input type={"text"} onChange={ e => handleChange(e) } placeholder={"ENTER LETTERS..."} /> */}
      <input
        type={"text"}
        onChange={optimizedVesion}
        placeholder={"ENTER LETTERS..."}
      />
      <hr />
      <ul>
        {data?.map((i) => {
          const { name, identifier } = i;
          return <li key={identifier}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
