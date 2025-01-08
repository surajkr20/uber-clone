const mapService = require('../services/maps.services.js');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    const { address } = req.query;
    if (!address) {
        return res.status(400).json({ message: 'Address query parameter is required' });
    }

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.error('Error fetching coordinates:', error.stack || error.message);
        res.status(500).json({ message: 'Error fetching coordinates' });
    }
};

module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;
    if (!origin || !destination) {
        return res.status(400).json({ message: 'Origin and destination query parameters are required' });
    }

    try {
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    } catch (error) {
        console.error('Error fetching distance and time:', error.stack || error.message);
        res.status(500).json({ message: 'Error fetching distance and time' });
    }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {input} = req.query;
        const suggestion = await mapService.getAutoCompleteSuggestions(input);
        // console.log(suggestion)

        res.status(200).json(suggestion);
    }
    catch (error) {
    console.error(error);
    throw new Error({message: "Internal server error"});
  }
}
