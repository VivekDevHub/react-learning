import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

// const MainLayout = lazy(() => import("../layout/MainLayout"));
// const Home = lazy(() => import("../pages/Home"));
// const Login = lazy(() => import("../pages/Login"));
// const Register = lazy(() => import("../pages/Rgister"));
// const Dashboard = lazy(() => import("../pages/Dashboard"));
// const NewDashboard = lazy(() => import("../pages/NewDashboard"));
// const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));

import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import NewDashboard from '../pages/NewDashboard';
import Home from '../pages/Home';

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                },
                {
                    path: "dashboard",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Dashboard />
                        },
                        {
                            path: "new",
                            element: <NewDashboard />
                        }
                    ]
                },
            ]
        },
    ])

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default AppRouter