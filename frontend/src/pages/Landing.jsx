// src/pages/Landing.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from '../assets/bg.png'


const Landing = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/user/register"); // navigate to login page
    };
    
  const handleLoginClick = () => {
    navigate("/user/login"); // navigate to login page
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Logo */}
      <div className="p-5 bg-white rounded-b-3xl rounded-l-3xl mb-20 mt-30">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>

      {/* Welcome section */}
      <div className="bg-[#fafafaea] p-10 rounded-tl-[10vh] text-center max-w-md w-full h-152">
        <h1 className="text-4xl font-bold mb-5 mt-5">Welcome to Reelish</h1>
        <p className="mb-10 text-gray-700">
          Discover and explore amazing food experiences. Register or Log in to get started!
        </p>

        {/* Button with arrow */}
        <button
          onClick={handleRegisterClick}
          className="flex items-center justify-center mb-5 gap-3 w-full py-5 bg-black text-white font-semibold rounded-b-2xl rounded-l-2xl hover:bg-gray-800 transition"
        >
          Go to Register <span className="text-2xl">→</span>
        </button>
        
        <button
          onClick={handleLoginClick}
          className="flex items-center justify-center gap-3 w-full py-5 bg-black text-white font-semibold rounded-b-2xl rounded-l-2xl hover:bg-gray-800 transition"
        >
          Go to Login <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
