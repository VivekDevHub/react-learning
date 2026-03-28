import React, { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const UserList = ({ user, handleUserDelete }) => {
  let data = useContext(MyStore);
  console.log("data from context", data);

  return (
    <div>
      <h1>{user.name.firstname}</h1>
      <button onClick={() => handleUserDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserList;