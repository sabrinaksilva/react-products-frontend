import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPageWithRoutes } from "../pages/MainPageWithRoutes";
import { SideBar } from "../components/grids/SideBar";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageWithRoutes />} />
        <Route path="/stock" element={<MainPageWithRoutes />} />
        <Route path="/products" element={<MainPageWithRoutes />} />
        <Route path="/sideBar" element={<SideBar />} />
      </Routes>
    </Router>
  );
};
