import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
let Home = lazy(() => import("../pages/Home"));
import Users from "../pages/Users";
let About = lazy(() => import("../pages/About"));
let Products = lazy(() => import("../pages/Products"));

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<h1>Loading home...</h1>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;