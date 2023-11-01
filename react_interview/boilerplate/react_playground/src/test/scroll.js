import axios from "axios";
import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePage = () => {};

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=${page}&results=50")
      .then((res) => {
        console.log(res?.data?.results, " resss");
        setData(res.data?.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
      <button onClick={() => console.log(data)}>data</button>
      <ul
        style={{ height: "600px", overflow: "scroll", border: "2px solid red" }}
      >
        {[...data]?.map((item) => {
          const { id, email } = item;
          return (
            <li
              key={id.value}
              style={{
                border: "1px solid green",
                margin: "10px",
                padding: "10px",
              }}
            >
              {email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Scroll;
