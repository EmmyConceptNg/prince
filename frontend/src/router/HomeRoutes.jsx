import Home from "../pages/landing/Index";
import Privacy from "../pages/home/privacy/Index";
import { Blogs } from "../pages/home/blogs/Index";
import Pricing from "../pages/home/pricing/Index";

export const HomeRoutes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/pricing", element: <Pricing /> },
  ];
};
