import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedDashboard from "./ProtectedDashboard";
import AuthProtected from "./AuthProtected";
import { getAllProducts } from "../api/productApis";

const AppRoutes = () => {
  let gigi = createBrowserRouter([
    {
      path: "/dashboard",
      element: <ProtectedDashboard />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              loader: async () => {
                let data = await getAllProducts();
                return data;
              },
              hydrateFallbackElement: (
                <h1 className="text-5xl font-bold">Loading products...</h1>
              ),
              element: <Home />,
            },
            {
              path: "about/:id",
              element: <About />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={gigi} />;
};

export default AppRoutes;