const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email uniqueness
    },
    password: {
        type: String,
        required: true,
        select: false, // Prevents the password field from being selected in queries by default
    },
    socketId: {
        type: String,
    }
});

// Token generation
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' }); // Expiry added for security
    return token;
};

// Comparing password using bcrypt
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};

// Password hash
userSchema.methods.hashedPassword = async function (password) {
    try {
        const saltRounds = 10; // Standard salt rounds
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
