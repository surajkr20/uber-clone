/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen == true) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      <img
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="uber/logo"
        className="w-16 absolute left-5 top-5"
      />

      <div className="w-screen h-screen">
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute w-full top-0">
        <div className="h-[30%] p-6 bg-white relative">
          <h5 className="absolute right-6 top-6 text-2xl opacity-0" ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }}>
            <i class="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[41%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Enter your destination"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
            />
          </form>
        </div>

        <div className="h-0 bg-red-500 transition-all" ref={panelRef}></div>
      </div>
    </div>
  );
};

export default Home;
