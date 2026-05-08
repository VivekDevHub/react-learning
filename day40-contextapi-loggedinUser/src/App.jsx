import React from 'react'
import { useAuth } from './context/AuthContext'
import Profile from './components/Profile';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App = () => {
  const {isLoggedIn} = useAuth();

  return (
    <>
    <Navbar/>
    <div className="container">
        {!isLoggedIn && <Login />}
        <Profile />
      </div>
    </>

  )
}

export default App