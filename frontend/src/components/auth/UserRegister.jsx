import React from "react";
import logo from "../../assets/logo.png";
import bg from '../../assets/bg.png'
import { Link } from "react-router-dom";

export default function UserRegister() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-cover pt-20" style={{ backgroundImage: `url(${bg})` }}>
            <div className="p-5 bg-white rounded-b-3xl rounded-l-3xl mb-20">
            <img src={logo} alt="" className="h-20 w-20" />
            </div>
                <form className="w-full h-163 p-10 bg-[#fafafaea] rounded-tl-[10vh]">
            <h2 className="text-4xl mt-6 mb-14 font-semibold text-black text-center">
                Sign Up
            </h2>
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white"
                type="text"
                placeholder="Name"
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-6"
                type="email"
                placeholder="Email"
            />
            <input
                className="w-full px-4 py-5 rounded-xl outline-none bg-white mt-6"
                type="password"
                placeholder="Password"
            />
            <button className="w-full py-5 rounded-b-2xl rounded-l-2xl font-semibold mt-6 bg-black text-white">
                Sign Up
            </button>
            <div className="mt-21 text-center">
                <h1 className="font-semibold">
                Already have an account ? <Link to="/user/login" className="underline">Log in</Link>
                </h1>
            </div>
            </form>
        </div>
    );
}
