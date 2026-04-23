import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../../features/auth/ui/jsx/Login";
import Signup from "../../features/auth/ui/jsx/Signup";
import Home from "../../features/home/ui/jsx/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
