
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email: {
        type: String,
        required: true,
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

// comparing password using bcrypt
userSchema.methods.comparePassword = async () =>{
    return await bcrypt.compare(password, this.password)
}

// password hash
userSchema.methods.hashedPassword = async () =>{
    return await bcrypt.hash(password, 395)
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel