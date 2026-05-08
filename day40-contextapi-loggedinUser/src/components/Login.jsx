import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const {login} = useAuth()

  const handleLogin = () => {
    const userData = {
      name:"Vivek kushwah",
      email:"vivek@gmail.com",
      role:"Frontend Developer",
    }

        const token = "abc123tokenxyz";

        login(userData,token)
  }


  return (
    <div className="card">
      <h2>Login Page</h2>
      <p>Click below to simulate login</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login