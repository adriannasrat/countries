import React from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { router } from "./routes/router";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <ThemeProvider>
      {/* <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-900 dark:text-white"> */}
      <RouterProvider router={router} />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
