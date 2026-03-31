import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import MainLayout from "../layouts/MainLayout";
import Installation from "../pages/Installation";
import Loader from "../components/Loader";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: Loader,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/home/:id",
        Component: AppDetails,
        HydrateFallback: Loader,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/appsData.json"),
        HydrateFallback: Loader,
      },
      {
        path: "/installation",
        Component: Installation,
        HydrateFallback: Loader,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
