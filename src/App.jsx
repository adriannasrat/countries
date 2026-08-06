import React from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { router } from "./routes/router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  );
}

export default App;
