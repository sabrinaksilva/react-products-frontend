import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GridContainer } from "../components/containers/GridContainer";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridContainer />} />
        <Route path="/stock" element={<GridContainer />} />
        <Route path="/products" element={<GridContainer />} />
        <Route path="/foo" element={<GridContainer />} />
        <Route path="/products/new" element={<GridContainer />} />
      </Routes>
    </Router>
  );
};
