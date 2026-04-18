import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/authSlice";
import axios from "axios";
import { loginUser } from "../features/actions/authAction";

const AppRoutes = () => {
  let dispatch = useDispatch();
  let token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      dispatch(removeUser());
    }

    (async () => {
      try {
        let res = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("loggedin user", res);
        dispatch(loginUser(res.data));
      } catch (error) {
        console.log("Error in me api", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          elementL: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;