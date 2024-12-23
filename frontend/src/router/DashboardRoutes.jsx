import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Index";
import DashboardLayout from "../components/layouts/dashboard/Index";
import { Blogs } from "../pages/dashboard/blogs/Index";
import Business from "../pages/dashboard/Business/Index";
import CreateBusiness from "../pages/dashboard/Business/Create";
import Settings from "../pages/dashboard/Settings/Index";
import Subscription from "../pages/dashboard/Subscription/Index";
import Audits from "../pages/dashboard/Audits/Index";
import Resources from "../pages/dashboard/Resources/Index";
import KnowledgeBase from "../pages/dashboard/KnowledgeBase/Index";
import Reports from "../pages/dashboard/Reports/Index";
import Support from "../pages/dashboard/Support/Index";
import TicketForm from "../components/dashboard/TicketForm";
import ForumTable from "../components/dashboard/ForumTable";
import HelpCenter from "../pages/dashboard/HelpCenter/Index";
import Employee from "../pages/dashboard/Employee/Index";
import AiQuestionnaire from "../pages/dashboard/AiQuestionnaire/Index";
import Roadmaps from "../pages/dashboard/Roadmaps/Index";

export const DashboardRoutes = () => {
  return [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="app" />, index: true },
        {
          path: "app",
          element: <Dashboard />,
        },
        {
          path: "business",
          element: <Business />,
        },
        {
          path: "business/create",
          element: <CreateBusiness />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "subscription",
          element: <Subscription />,
        },
        {
          path: "audits",
          element: <Audits />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "knowledge-base",
          element: <KnowledgeBase />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "forum",
          element: <ForumTable />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "support/create-ticket",
          element: <TicketForm />,
        },
        {
          path: "help-center",
          element: <HelpCenter />,
        },
        {
          path: "company/employee",
          element: <Employee />,
        },
        {
          path: "questionnaire",
          element: <AiQuestionnaire />,
        },
        {
          path: "roadmaps",
          element: <Roadmaps />,
        },
        {
          path: "news",
          element: <Blogs />,
        },
      ],
    },
  ];
};
