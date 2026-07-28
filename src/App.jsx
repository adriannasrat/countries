import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-900 dark:text-white">
          <Navbar />
          <AppRoutes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
