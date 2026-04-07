import React from 'react';
import { Outlet } from 'react-router';
import { AuthProvider } from '../context/AuthContext';

const MainLayout = () => {
  return (
    <div>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  )
}

export default MainLayout