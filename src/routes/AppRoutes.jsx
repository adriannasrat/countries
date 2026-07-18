import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CountryDetails from "../pages/CountryDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryDetails />} />
    </Routes>
  );
}
