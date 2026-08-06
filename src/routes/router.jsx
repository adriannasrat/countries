import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import CountryDetails from "../pages/CountryDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RouteError from "../pages/RouteError";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:code",
        element: <CountryDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
