const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "Firstname must be at least 2 characters long"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [2, "Lastname must be at least 2 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [5, "Lastname must be at least 5 characters long"]
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  socketId: {
    type: String,
  },
  vehicle: {
    color: {
      type: String,
      // required: true,
      minlength: [2, "Color must be at least 2 characters long"],
    },
    plate: {
      type: String,
      // required: true,
      minlength: [3, "Plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      // required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      // required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },

  location: {
    ltd: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
