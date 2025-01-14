/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="text-3xl mb-2 text-center mr-2"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold">New Ride Available!</h3>

      <div className="flex items-center justify-between mt-3 rounded-lg bg-gray-100 p-2 mb-1">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <h2 className="font-serif font-medium text-xl">
            {props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h4 className="text-lg font-semibold">2.2KM</h4>
      </div>

      {/* main elements div */}
      <div className="flex gap-2 justify-between flex-col items-center">
        {/* confirm ride information div's */}
        <div className="w-full flex flex-col gap-2 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-rectangle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                <i className="ri-money-rupee-circle-fill"></i>
                {props.ride?.fare}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-6">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
              props.confirmRide()
            }}
            className="w-1/2 bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Accept
          </button>

          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="w-1/2 bg-gray-500 text-gray-100 font-semibold p-2 rounded-lg"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
