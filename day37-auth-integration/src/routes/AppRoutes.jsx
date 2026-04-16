import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import axios from "axios";

const AppRoutes = () => {
  let dispatch = useDispatch();
  let token = localStorage.getItem("accessToken");
console.log(token,'popopopopop=-=-=-=-=-');

  useEffect(() => {
if (!token || token === "undefined") {
  return; // API call मत करो
}
    // if (token) {
    //     dispatch(addUser())
    // }

    (async () => {
      try {
        let res = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("loggedin user", res);
        dispatch(addUser(res.data));
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
          element: <MainLayout />,
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
