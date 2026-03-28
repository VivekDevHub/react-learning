import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const DashboardTwo = ({ getClickedProduct }) => {
  console.log("clicked product->", getClickedProduct);
  const [allUsers, setAllUsers] = useState([]);

  let fetchUsers = async () => {
    let res = await axios.get("https://fakestoreapi.com/users");
    // console.log(res)
    setAllUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let handleUserDelete = (user_id) => {
    let filterUsers = allUsers.filter((elem) => elem.id !== user_id);
    setAllUsers(filterUsers);
  };

  return (
    <div>
      <h1>Users Home</h1>

      <div>
        {allUsers.map((elem) => {
          return (
            <UserList
              key={elem.id}
              handleUserDelete={handleUserDelete}
              user={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardTwo;