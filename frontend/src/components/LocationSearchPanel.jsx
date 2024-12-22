/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LocationSearchPanel = ({setPanelOpen, setVehiclePanelOpen}) => {
  // sample array for location details
  const locations = [
    "16A, Near sahid ramanand singh park, punpun ghat",
    "24B, Near rajendra nagar tarminal, college of commerce, arts & science",
    "BN college, Near chiraiyatad pull, patna railway station",
    "23C, veenapani library, Near punpun new highway(auto stand)",
  ];

  return (
    <div>
      {/* just a sample data */}

      {locations.map(function (element, idx) {
        return (
          <div key={idx} onClick={()=>{
            setVehiclePanelOpen(true);
            setPanelOpen(false)
          }} className="flex items-center justify-start gap-4 border-2 border-gray-50 active:border-black p-2 my-2 rounded-xl">
            <h2 className="w-12 h-8 rounded-full bg-[#eee] flex items-center justify-center">
              <i className="ri-map-pin-2-line text-xl"></i>
            </h2>
            <h4 className="font-medium">
              {element}
            </h4>
          </div>
        );
      })}

    </div>
  );
};

export default LocationSearchPanel;
