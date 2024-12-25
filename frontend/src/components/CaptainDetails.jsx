/* eslint-disable no-unused-vars */
import React from "react";

const CaptainDetails = () => {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Devin Kalua</h2>
        </div>
        <div>
          <h4 className="text-lg font-semibold">
            <i className="ri-money-rupee-circle-line">290.50</i>
          </h4>
          <p className="text-sm font-medium text-center">Earned</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-start bg-gray-300 rounded-lg p-3">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p>Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p>Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p>Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
