import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err, " errr"));
  }, []);

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {[...data]?.map((item) => {
            const { id, name, username, email } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
