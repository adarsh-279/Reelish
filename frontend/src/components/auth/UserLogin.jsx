import React, { useState } from "react";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserLogin() {

    const navigate = useNavigate()

    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setformData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(import.meta.env.VITE_USER_LOGIN_API, formData, { withCredentials: true});
            setformData({
                email: "",
                password: "",
            });
        } catch (error) {
            alert("Login failed. Please try again.");
        }

        navigate("/home");
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover pt-20" style={{ backgroundImage: `url(${bg})` }}>
        <div className="p-5 bg-white rounded-b-3xl rounded-l-3xl mb-20">
            <img src={logo} alt="" className="h-20 w-20" />
        </div>
        <form onSubmit={handleSubmit} className="w-full h-163 p-10 bg-[#fafafaea] rounded-tl-[10vh]">
            <h2 className="text-4xl mt-10 mb-20 font-semibold text-black text-center">
                Login
            </h2>
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-10"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit" className="w-full py-5 rounded-b-2xl rounded-l-2xl font-semibold mt-10 bg-black text-white">
                Login
            </button>
            <div className="mt-25 text-center">
            <h1 className="font-semibold">
                Don't have any account ? <Link to="/user/register" className="underline">Sign up</Link>
            </h1>
            </div>
        </form>
        </div>
    );
}
