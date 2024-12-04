const captainControler = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be at least 2 characters long"),
    body("fullname.lastname")
      .isLength({ min: 2 })
      .withMessage("First name must be at least 2 characters long"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
    body("vehicle.color")
      .isLength({ min: 2 })
      .withMessage("color must be at least 2 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainControler.registerCaptain
),(req, res)=>{
  res.send("caption created")
};

module.exports = router;
