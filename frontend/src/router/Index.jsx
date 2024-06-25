import { useRoutes } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes.jsx";
// import { AuthRoutes } from "./AuthRoutes";

export const Routes = () => {
  return useRoutes([
    ...HomeRoutes(),
    // ...AuthRoutes(),
  ]);
};
