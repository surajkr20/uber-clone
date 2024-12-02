const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, 'firstname contain atleast 2 character long']
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'password contain min lenght atleast 5 characters long']
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active','inactive'],
    default: 'inactive'
  },
  vehical: {
    color: {
        type: String,
        required: true,
        minlength: [3, 'color name, minlength contain atleast 3 characters long']
    },
    plate: {
        type: String,
        required: true,
        minlength: [3, 'plate must be contain atleast 3 characters long']
    },
  },
  location: {
    lat: {
        type: Number,
    },
    lng: {
        type: Number
    }
  }
});

captainSchema.exports.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.exports.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain',captainSchema)
module.exports = captainModel