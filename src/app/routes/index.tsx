import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainGridContainer } from "../components/grids/MainGridContainer";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainGridContainer />} />
        <Route path="/stock" element={<MainGridContainer />} />
        <Route path="/products" element={<MainGridContainer />} />
        <Route path="/foo" element={<MainGridContainer />} />
      </Routes>
    </Router>
  );
};
