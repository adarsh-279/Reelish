import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegister from "../components/auth/UserRegister";
import UserLogin from "../components/auth/UserLogin";
import PartnerRegister from "../components/auth/PartnerRegister";
import PartnerLogin from "../components/auth/PartnerLogin";
import Home from "../pages/Home";
import CreateFood from "../pages/CreateFood";
import FoodPartnerProfile from "../components/profile/FoodPartnerProfile";
import PartnerProfileUser from "../components/profile/PartnerProfileUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/foodpartner/register" element={<PartnerRegister />} />
      <Route path="/foodpartner/login" element={<PartnerLogin />} />
      <Route path="/createfood" element={<CreateFood />} />

      {/* Partner viewing their own profile */}
      <Route path="/partner/:id" element={<FoodPartnerProfile />} />

      {/* Normal user viewing partner profile */}
      <Route path="/partner/user/:id" element={<PartnerProfileUser />} />
    </Routes>
  );
};

export default AppRoutes;
