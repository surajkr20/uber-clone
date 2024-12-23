/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom"

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={'/home'} className="fixed h-12 w-12 bg-white flex items-center justify-center rounded-full right-2 top-2">
        <i className="ri-home-4-line text-lg font-medium"></i>
      </Link>

      <div className="h-1/2">
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-1/2 p-4">
        {/* driver information */}
        <div className="flex items-center justify-between">
          <img
            className="h-24"
            src="https://www.svgrepo.com/show/408292/car-white.svg"
            alt="car/image"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Suraj kumar</h2>
            <h4 className="text-xl font-semibold">KT04 MK 98CP</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

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
        </div>

        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
