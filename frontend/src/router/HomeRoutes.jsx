import Home from "../pages/landing/Index";
import Privacy from "../pages/privacy/Index";

export const HomeRoutes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/privacy", element: <Privacy /> },
  ];
};
