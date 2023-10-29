import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <h1>Home Page</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Bookmark User</th>
            <th scope="col">Email</th>
            <th scope="col">Details Bookmark</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary m-2" to={`/user/{user.id}`}>
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </Link>
                <Link
                  className="btn btn-secondary m-2"
                  to={`/user/edit/${user.id}`}
                >
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <Link
                  className="btn btn-danger m-2"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
