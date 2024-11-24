import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GridContainer } from "../components/containers/shared/GridContainer";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GridContainer />} />
        <Route path="/products" element={<GridContainer />} />
        <Route path="/products/new" element={<GridContainer />} />
        <Route path="/products/edit" element={<GridContainer />} />
        <Route path="/cash-flow/overview" element={<GridContainer />} />
        <Route path="/cash-flow/transactions" element={<GridContainer />} />
        <Route path="/cash-flow/transactions/new" element={<GridContainer />} />
        <Route path="/login" element={<GridContainer />} />

        <Route path="/foo" element={<GridContainer />} />
      </Routes>
    </Router>
  );
};
