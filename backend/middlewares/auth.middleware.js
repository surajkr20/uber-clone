const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Retrieve token from cookies or Authorization header
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        // If no token is provided, return unauthorized response
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token missing' });
        }

        const isBlacklisted = await userModel.findOne({token: token})
        if(isBlacklisted){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify the JWT token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user associated with the token
        const user = await userModel.findById(decoded._id);

        // If user does not exist in the database, return unauthorized response
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized - User not found' });
        }

        // Attach user to the request object for further use
        req.user = user;

        // Pass control to the next middleware or route handler
        return next();
    } catch (err) {
        console.error('Authorization error:', err.message);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};
