import React from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { router } from "./routes/router";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
