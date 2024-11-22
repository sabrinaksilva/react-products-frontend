import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPageWithRoutes } from "../components/MainPageWithRoutes";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageWithRoutes />} />
        <Route path="/stock" element={<MainPageWithRoutes />} />
        <Route path="/products" element={<MainPageWithRoutes />} />
      </Routes>
    </Router>
  );
};
