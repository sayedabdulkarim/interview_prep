import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //
  const handlePage = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    console.log({
      scrollTop,
      clientHeight,
      scrollHeight,
    });
    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  //
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://randomuser.me/api/?page=${page}&results=50")
      .then((res) => {
        console.log(res.data.results);
        setData((prev) => [...prev, ...res?.data?.results]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, " errr");
      });
  }, [page]);

  return (
    <div>
      <button onClick={() => console.log(data)}>data</button>

      <ul
        style={{ height: 600, border: "2px solid green", overflow: "scroll" }}
        onScroll={handlePage}
      >
        {[...data]?.map((item) => {
          //   const {
          //     result: { first, last },
          //   } = item;
          //   const { name } = item.results;
          return (
            <li style={{ border: "1px solid red", margin: 10 }}>
              {/* {`${first} - ${last}`} */}
              One
            </li>
          );
        })}
      </ul>

      <h1>Helllo</h1>
    </div>
  );
};

export default Index;
