import React from 'react'

const UserList = ({user, handleUserDelete}) => {
  console.log('user dikh---====-=-=--==-', user);
  
  return (
    <div>
      <h1>{user?.name?.firstname}</h1>
      <button onClick={()=>{handleUserDelete(user.id)}}>delete</button>
    </div>
  )
}

export default UserList