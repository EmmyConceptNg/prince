
import Privacy from "../pages/home/privacy/Index";
import { Blogs } from "../pages/home/blogs/Index";
import Pricing from "../pages/home/pricing/Index";
import HowItWorks from "../pages/home/howItWorks/Index";
import Post from "../pages/home/blogs/Post";
import Terms from "../pages/home/terms/Index";
import Cookies from "../pages/home/cookies/Index";
import { Updates } from "../pages/home/update/Index";
import Landing from "../pages/landing/Index";

export const HomeRoutes = () => {
  return [
    { path: "/", element: <Landing /> },
    { path: "/home", element: <HowItWorks /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/cookies", element: <Cookies /> },
    { path: "/terms", element: <Terms /> },
    { path: "/updates", element: <Updates /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blogs/:id", element: <Post /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/home", element: <HowItWorks /> },
  ];
};
