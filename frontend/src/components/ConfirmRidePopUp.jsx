/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
    }

  return (
    <div>
      <h3 className="text-2xl font-semibold">Confirm this ride to Start!</h3>

      <div className="flex items-center justify-between mt-3 rounded-lg bg-gray-200 p-2 mb-1">
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg"
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <h2 className="font-serif font-medium text-xl">Abhinav Suraj</h2>
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
                Sampatchak, patna, Bihar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-rectangle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Sampatchak, patna, Bihar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                <i className="ri-money-rupee-circle-fill"></i>
                198.5
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
            <input value={otp} onChange={(e)=>{
                setOtp(e.target.value)
            }} type="number" placeholder="Enter OTP" className="w-full px-20 py-2 rounded-lg bg-gray-200 placeholder:text-center"/>
          <div className="w-full flex items-center justify-between gap-6">
            <Link
              to={"/captain-riding"}
              className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg text-center"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
              }}
              className="w-full bg-red-500 text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
