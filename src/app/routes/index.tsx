import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWithTopBar from "../pages/PageWithTopBar";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWithTopBar />} />
      </Routes>
    </BrowserRouter>
  );
};
