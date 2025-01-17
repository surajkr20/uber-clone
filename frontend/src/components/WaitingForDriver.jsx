/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="text-3xl font-semibold mb-2 text-right mr-2"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-20"
          src="https://www.svgrepo.com/show/408292/car-white.svg"
          alt="car/image"
        />
        <div className="text-right">
            <h2 className="text-lg font-medium">{props.ride?.captain.fullname.firstname}</h2>
            <h4 className="text-xl font-semibold">{props.ride?.captain.vehicle.plate}</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            <h1 className="text-xl font-semibold">Otp : {props.ride?.otp}</h1>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
