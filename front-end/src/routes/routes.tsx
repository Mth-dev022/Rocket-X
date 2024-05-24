import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Questions from "../components/Quiz/Quiz";
import Result from "../components/Result/Result";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
