import React, { useState } from "react";
import logo from "../../assets/logo.png";
import bg from '../../assets/bg.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PartnerRegister() {

    const navigate = useNavigate()

    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setformData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(import.meta.env.VITE_FOOD_PARTNER_REGISTER_API, formData, { withCredentials: true});
            setformData({
                fullName: "",
                email: "",
                password: "",
                address: "",
                phone: ""
            });

            navigate("/foodpartner/login");

        } catch (error) {
            alert("Registration failed. Please try again.");

            navigate("/foodpartner/register");
        }

    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover pt-10" style={{ backgroundImage: `url(${bg})` }}>
            <div className="p-5 bg-white rounded-b-3xl rounded-l-3xl mb-10">
            <img src={logo} alt="" className="h-15 w-15" />
            </div>
            <form onSubmit={handleSubmit} className="w-full min-h-163 p-10 bg-[#fafafaea] rounded-tl-[10vh]">
            <h2 className="text-[2.2rem] mt-4 mb-10 font-semibold text-black text-center">
                Food Partner Sign Up
            </h2>
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white"
                type="text"
                name="fullName"
                placeholder="Name"
                value={formData.fullName}
                onChange={handleChange}
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-5"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-5"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-5"
                type="number"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-5"
                type="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
            />
            <button type="submit" className="w-full py-5 rounded-b-2xl rounded-l-2xl font-semibold mt-5 bg-black text-white">
                Sign Up
            </button>
            <div className="mt-7.5 text-center">
                <h1 className="font-semibold">
                Already have a partner account ? <Link to="/foodpartner/login" className="underline">Log in</Link>
                </h1>
                <h1 className="font-semibold">
                Are you a User ? <Link to="/user/login" className="underline">Log in</Link>
                </h1>
            </div>
            </form>
        </div>
    );
}
