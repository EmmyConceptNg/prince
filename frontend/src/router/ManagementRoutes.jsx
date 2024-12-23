import { Navigate } from "react-router-dom";
import Dashboard from "../pages/management/Index";
import { Blogs } from "../pages/management/blogs/Index";
import ManagementLayout from "../components/layouts/management/Index";

export const ManaagementRoutes = () => {
  return [
    {
      path: "/management",
      element: <ManagementLayout />,
      children: [
        { element: <Navigate to="app" />, index: true },
        {
          path: "app",
          element: <Dashboard />,
        },
        {
          path: "news",
          element: <Blogs />,
        },
      ],
    },
  ];
};
