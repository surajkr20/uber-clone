/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const LookingForDriver = (props) => {

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicalFound(false)
          props.setConfirmRidePanel(true)
        }}
        className="text-3xl font-semibold mb-2 text-right mr-2"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-2">Looking For Driver</h3>

      {/* main elements div */}
      <div className="flex gap-2 justify-between flex-col items-center">
        <img className="h-36 -mb-10"
          src="https://www.svgrepo.com/show/408292/car-white.svg"
          alt="car/image"
        />
        {/* confirm ride information div's */}
        <div className="w-full flex flex-col gap-2 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.pickup}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-rectangle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                <i className="ri-money-rupee-circle-fill"></i>
                {props.fare[props.vehicleType]}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LookingForDriver