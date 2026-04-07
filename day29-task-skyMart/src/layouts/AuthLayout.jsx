import React from 'react'
import { Outlet } from 'react-router'
import { AuthProvider } from '../context/AuthContext'

const AuthLayout = () => {
  return (
    <div>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  )
}

export default AuthLayout