import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/* function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetails />} />
    </Router>
  );
} */

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
