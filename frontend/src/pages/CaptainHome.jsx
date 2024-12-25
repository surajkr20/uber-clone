/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber/logo"
        />
        <Link
          to={"/captain-home"}
          className="h-12 w-12 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* captain information */}
      <div className="h-2/5">
        <CaptainDetails/>
      </div>

      <div
        className="fixed z-10 bottom-0 p-3 bg-white w-full px-3 py-8 translate-y-full"
      >
        <RidePopUp/>
      </div>
    </div>
  );
};

export default CaptainHome;
