const axios = require("axios");
const captainModel = require('../model/captain.Model');

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLEMAP_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching coordinates");
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLEMAP_API_KEY;

  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.GOOGLEMAP_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=<string>&key=${encodeURIComponent(
    input
  )}&key=${apiKey}}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching suggestions");
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) =>{
  const captains = await captainModel.find({
    location:{
      $geoWithin:{
        $centerSphere: [[ltd, lng], radius/6371]
      }
    }
  })
  return captains
}
