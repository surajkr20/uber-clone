// in this folder contain all the logics of user

const userModel = require('../model/user.model')
const userService = require('../services/user.services')
const { validationResult } = require('express-validator')

// user registration/creation functionality
module.exports.registerUser = async (req, res, next) => {
    try {
        // Validate incoming request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
        }

        // Destructure user details from the request body
        const { fullname, email, password } = req.body;

        // Check if a user with the provided email already exists in the database
        const isUserAlready = await userModel.findOne({ email });
        if (isUserAlready) {
            return res.status(400).json({ message: 'User already exists' }); // Respond if user already exists
        }

        // Hash the plain text password using bcrypt (in a way of static)
        const hashedPassword = await userModel.hashPassword(password);

        // Create a new user in the database using the userService
        const user = await userService.createUser({
            firstname: fullname.firstname, // Extract the first name from fullname object
            lastname: fullname.lastname,  // Extract the last name from fullname object
            email,
            password: hashedPassword      // Use the hashed password
        });

        // Generate a JWT for the newly created user
        const token = user.generateAuthToken();

        // Respond with the generated token and user details
        res.status(201).json({ token, user });

    } catch (error) {
        // Handle unexpected errors
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' }); // Respond with a generic error message
    }
};

// user login functionality
module.exports.loginUser = async (req, res, next) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find the user by email and include the password field
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'you are not available in my records, please register now!' });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password); // Ensure `await` is used
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = user.generateAuthToken();

        // Send response
        res.cookie('token', token)
        res.status(200).json({ token, user });
    } catch (error) {
        // Handle unexpected errors
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}