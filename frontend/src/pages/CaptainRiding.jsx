/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

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

      <div className="h-4/5">
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* captain information */}
      <div
        className="h-1/5 bg-yellow-400 flex flex-col items-center justify-center"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5 className="text-3xl text-center">
          <i className="ri-arrow-down-wide-fill"></i>
        </h5>

        <div className="w-full flex items-center justify-between p-4">
          <h4 className="text-xl font-medium">5 km Away</h4>
          <button className="w-[170px] bg-green-600 text-white font-semibold p-3 rounded-lg">
            Complete Ride
          </button>
        </div>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 p-3 bg-white w-full px-3 py-8 translate-y-full"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
