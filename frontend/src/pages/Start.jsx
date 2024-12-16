// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div
        className="w-full bg-left bg-cover 
      bg-[url(https://images.unsplash.com/photo-1695066584644-5453334ff5ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-6 h-screen bg-red-400 flex flex-col justify-between"
      >
        <img
          className="w-[5rem] ml-6"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="logo"
        />
        <div className="bg-white pb-7 py-4 px-4 text-center">
          <h2 className="text-3xl font-bold pb-4">Get started with Uber</h2>
          <Link
            to="/login"
            className="w-full flex items-center justify-center bg-black text-white py-3 rounded font-bold text-xl"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
