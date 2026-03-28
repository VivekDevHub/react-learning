import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const DashboardTwo = () => {
  const [allUsers, setallUsers] = useState([]);

  let fetchUsers = async () => {
    let res = await axios.get("https://fakestoreapi.com/users");
    setallUsers(res?.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  let handleUserDelete = (user_id) => {
    console.log(user_id);
    let filterUsers = allUsers.filter((elem) => elem.id !== user_id);
    setallUsers(filterUsers);
  };
  return (
    <div>
      <h1>Users Home</h1>
      <div>
        {allUsers.map((elem) => {
          return (
            <UserList
              key={elem.id}
              user={elem}
              handleUserDelete={handleUserDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardTwo;
