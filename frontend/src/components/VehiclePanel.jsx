/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <div className="flex items-center justify-between p-2">
          <h2 className="text-2xl font-semibold mb-2">Choose your Vehicle</h2>
          <h5 onClick={()=>{
            props.setVehiclePanelOpen(false)
            props.setPanelOpen(true)
          }} className="text-3xl font-semibold mb-2">
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('car')
        }} className="flex items-center justify-center gap-4 w-full p-3 border-2 active:border-black rounded-lg mb-3">
          <img
            src="https://www.svgrepo.com/show/408292/car-white.svg"
            alt="uber/car/img"
            className="h-20"
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-xl">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins, Away</h5>
            <p className="font-medium text-xs">Affordable, car rides</p>
          </div>
          <h2 className="text-xl font-semibold">
            <i className="ri-money-rupee-circle-line"></i>{props.fare.car}
          </h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('motorcycle')
        }} className="flex items-center justify-center gap-4 w-full p-3 border-2 active:border-black rounded-lg mb-3">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="uber/car/img"
            className="h-14"
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-xl">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins, Away</h5>
            <p className="font-medium text-xs">Affordable, MotorCycle rides</p>
          </div>
          <h2 className="text-xl font-semibold">
            <i className="ri-money-rupee-circle-line"></i>{props.fare.motorcycle}
          </h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('auto')
        }} className="flex items-center justify-center gap-4 w-full p-3 border-2 active:border-black rounded-lg">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="uberauto"
            className="h-14"
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-xl">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins, Away</h5>
            <p className="font-medium text-xs">Affordable, Auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">
            <i className="ri-money-rupee-circle-line"></i>{props.fare.auto}
          </h2>
        </div>
    </div>
  )
}

export default VehiclePanel