import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Bem vindo!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};
