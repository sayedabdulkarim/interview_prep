import React, { useEffect } from "react";

const IdxDb = () => {
  const idb = window.indexedDB;

  const createCollection = () => {
    if (!idb) {
      console.log("no IDB found.");
    }
    console.log(idb, " idbbbbbbbbb");
  };

  useEffect(() => {
    createCollection();
  }, []);

  return (
    <div>
      <h1>Hello Index DB</h1>
    </div>
  );
};

export default IdxDb;
