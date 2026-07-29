import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import CountryDetails from "../pages/CountryDetails";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:code",
        element: <CountryDetails />,
      },
    ],
  },
]);
