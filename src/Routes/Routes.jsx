import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import MainLayout from "../layouts/MainLayout";
import Installation from "../pages/Installation";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("appsData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
