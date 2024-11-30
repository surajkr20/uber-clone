
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: [3, 'fullname must be contains atleast 3 character long']
    },
    lastname: {
        type: String,
        required: true,
        minlength: [3, 'lastname must be contains atleast 3 character long']
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String
    }
})

// token generation
userSchema.methods.generateAuthToken = () =>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}



module.exports = mongoose.model("User", userSchema)