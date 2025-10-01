import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegister from "../components/auth/UserRegister";
import UserLogin from "../components/auth/UserLogin";
import PartnerRegister from "../components/auth/PartnerRegister";
import PartnerLogin from "../components/auth/PartnerLogin";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
    <>
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user/register" element={<UserRegister />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/foodpartner/register" element={<PartnerRegister />} />
            <Route path="/foodpartner/login" element={<PartnerLogin />} />
        </Routes>
    </>
    );
};

export default AppRoutes;
