/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
  };

  return (
    <div className="w-full">
      {Array.isArray(suggestions) && suggestions.length > 0 ? (
        suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="flex gap-4 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-1"
          >
            <h2 className="bg-[#eee] h-6 flex items-center justify-center w-6 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            {/* Use the appropriate property to display */}
            <h4 className="font-medium w-full">{elem.description}</h4>
          </div>
        ))
      ) : (
        <p className="text-center text-xl">No suggestions available</p>
      )}
    </div>
  );
  
};

export default LocationSearchPanel;
