import { Navigate } from "react-router-dom";
import Dashboard from "../pages/management/Index";
import { Blogs } from "../pages/management/blogs/Index";
import ManagementLayout from "../components/layouts/management/Index";
import Users from "../pages/management/Users/Index";
import UsersView from "../pages/management/Users/View";
import Support from "../pages/management/Support/Index";
import Resources from "../pages/management/Resources/Index";
import Reports from "../pages/management/Reports/Index";
import Settings from "../pages/dashboard/Settings/Index";
import Payments from "../pages/management/payments/Index";
import Questionnaire from "../pages/management/questionnaire/Index";
import Feedback from "../pages/management/feedback/Index";
import Messages from "../pages/dashboard/Messages/Index";

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
          path: "users",
          element: <Users />,
        },
        {
          path: "users/:id",
          element: <UsersView />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "news",
          element: <Blogs />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "payments",
          element: <Payments />,
        },
        {
          path: "questionnaire",
          element: <Questionnaire />,
        },
        {
          path: "feedback",
          element: <Feedback />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
      ],
    },
  ];
};
