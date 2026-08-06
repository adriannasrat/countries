import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import RouteError from "../pages/RouteError";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { default: Component } = await import("../pages/Home");

          return { Component };
        },
      },
      {
        path: "/country/:code",
        lazy: async () => {
          const { default: Component } = await import(
            "../pages/CountryDetails"
          );

          return { Component };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { default: Component } = await import("../pages/NotFound");

          return { Component };
        },
      },
    ],
  },
]);
